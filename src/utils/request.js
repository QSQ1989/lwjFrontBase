/* global window */
import axios from 'axios'
import qs from 'qs'
import jsonp from 'jsonp'
import lodash from 'lodash'
import pathToRegexp from 'path-to-regexp'
import {message} from 'antd'
import {CORS} from './config'

const fetch = (options) => {
  //  接受传入数据
  let {
    method = 'get',
    data,
    fetchType,
    url,
    responseType
  } = options
  // 深克隆传入数据
  const cloneData = lodash.cloneDeep(data)
  try {
    let domin = ''
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
      url = url.slice(domin.length)
    }
    const match = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)
    for (let item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domin + url
  } catch (e) {
    message.error(e.message)
  }

  // 处理jsonp请求
  if (fetchType === 'JSONP') {
    return new Promise((resolve, reject) => {
      jsonp(url, {
        param: `${qs.stringify(data)}&callback`,
        name: `jsonp_${new Date().getTime()}`,
        timeout: 4000
      }, (error, result) => {
        if (error) {
          reject(error)
        }
        resolve({statusText: 'OK', status: 200, data: result})
      })
    })
  }

  // 根据请求类型响应
  switch (method.toLowerCase()) {
    case 'get':
      if (responseType == 'blob') {
        return axios.get(url, {
          params: cloneData,
          responseType: responseType
        })
      } else {
        return axios.get(url, {params: cloneData})
      }
    case 'delete':
      return axios.delete(url, {data: cloneData})
    case 'post':
      return axios.post(url, cloneData)
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}

let responseData = {};
const getNode = (jsonData) => {
  for (var key in jsonData) {
    let node = jsonData[key];
    if (node) {
      if (node.hasOwnProperty('$srvmessage')) {
        responseData = {
          success: false,
          statusCode: node['$errorCode'],
          message: node['$srvmessage']
        };
        return;
      } else {
        getNode(node);
      }
    }
  };
  return responseData;
};

export default function request(options) {
  if (options.url && options.url.indexOf('//') > -1) {
    const origin = `${options
      .url
      .split('//')[0]}//${options
      .url
      .split('//')[1]
      .split('/')[0]}`
    if (window.location.origin !== origin) {
      if (CORS && CORS.indexOf(origin) > -1) {
        options.fetchType = 'CORS'
      } else {
        options.fetchType = 'JSONP'
      }
    }
  }

  return fetch(options).then((response) => {
    const {statusText, status} = response;

    let data = response.data;
    if (data.code !== 0 && !_.isEmpty(data.messages)) {
      if (!_.isEmpty(data.messages.serverInternal)) {
        let statusCode = data.messages.serverInternal.$errorCode;
        let msg = data.messages.serverInternal.$srvmessage;
        return Promise.reject({success: false, statusCode, message: msg})
      } else if (JSON.stringify(data.messages).includes('$srvmessage')) {
        return Promise.reject(getNode(data));
      } else {
        return Promise.reject({success: false, statusCode: 'Unknown Error', message: '未知错误，请联系管理员。'})
      }
    }
    if (data instanceof Array) {
      data = {
        list: data
      }
    }
    if (options.responseType == 'blob') {
      return Promise.resolve(data)
    } else {
      return Promise.resolve({
        success: true,
        message: statusText,
        statusCode: status,
        ...data
      })
    }

  }).catch((error) => {
    const {response} = error
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const {data, statusText} = response
      statusCode = response.status
      msg = data.message || statusText
      if (statusCode === 401) {
        msg = "登陆过期，请重新登陆。";
        const loginUrl = encodeURIComponent(window.location.href)
        window.location.href = `/security/auth/login?returnUrl=${loginUrl}`
        return 401
      }
    } else {
      statusCode = 600
      msg = error.message || 'Network Error'
    }
    return Promise.reject({success: false, statusCode, message: msg})
  })
}

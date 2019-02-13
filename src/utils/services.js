import {
  request,
  config
} from 'utils'

const {
  defaultPageSize
} = config

/**
 * 公共的query组件
 * @param {*} param0
 * @author lz
 */
export async function commonQuery ({
                                     interfaceName = 'list',
                                     apiBaseUrl,
                                     limit,
                                     current: start = 0,
                                     sort,
                                     order,
                                     queryParam = {},
                                   }) {
  const url = `${apiBaseUrl}/${interfaceName}`
  const param = {
    start: start,
    limit: limit ? limit : defaultPageSize,
    sort: sort,
    order: order,
    ...queryParam,
  }
  return request({
    url: url,
    method: 'POST',
    data: param
  })
}

/**
 * 公共的query组件
 * @param {*} param0
 * @author lz
 */
export async function commonQuerys({
  apiBaseUrl,
  pageSize: limit = defaultPageSize,
  current: page = 1,
  sort,
  order,
  queryParam = {}
}) {
  const url = `${apiBaseUrl}/list/${limit}/${page}/${sort}/${order}/complex`
  return request({ url: url, method: 'put', data: queryParam })
}

/**
 * 公共的query组件
 * @param {*} param0
 * @author lz
 */
export async function commonQuerysss({
  apiBaseUrl,
  pageSize: limit = defaultPageSize,
  current: page = 1,
  sort,
  order,
  queryParam = {
  }
}) {
  const url = `${apiBaseUrl}/list/${queryParam.pageSize?queryParam.pageSize:limit}/${queryParam.current?queryParam.current:page}/${sort}/${order}/complex`
  return request({ url: url, method: 'put', data: {} })
}

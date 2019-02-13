import {request, config} from 'utils'

const {api} = config;
const {menus} = api;

export async function query() {
  return request({url: `${menus}/mine`, method: 'get', data: {}})
}

export async function all() {
  return request({url: `${menus}/all`, method: 'get', data: {}})
}

export async function getByRole(roleId) {
  return request({url: `${menus}/getByRole/{roleId}/`, method: 'get', data: {}})
}

export async function bindByRole(roleId, params) {
  return request({url: `${menus}/bindByRole/{roleId}/`, method: 'post', data: params})
}

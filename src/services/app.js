import { request, config } from '../utils'

const {api: {user, userLogout, userLogin, isLogin, getCurrentSystemProperty, currentTenant, userTenant}} = config

// export async function login(params) {   return request({     url: userLogin,
//    method: 'post',     data: params   }) }

export async function logout (params) {
  return request({url: userLogout, method: 'get'})
}

// export async function query(params) {   return request({     url:
// user.replace('/:id', ''),     method: 'get',     data: params   }) }

export async function isLoginUser () {
  return request({url: isLogin, method: 'get'})
}

/**
 * 获取当前租户的系统配置
 */
export async function getSystemProperty () {
  return request({url: getCurrentSystemProperty, method: 'GET'})
}

export async function getCurrentTenant () {
  return request({url: currentTenant, method: 'GET'})
}

export async function boundUI () {
  return request({url: `${userTenant}/boundUI`, method: 'GET'})
}

import http from './public'
const baseUrl = '/api'
// 登录
export const userLogin = (params) => {
  return http.fetchPost(`${baseUrl}/users/login`, params)
}
// 退出登录
export const loginOut = (params) => {
  return http.fetchPost(`${baseUrl}/users/loginOut`, params)
}
// 用户信息
export const userInfo = (params) => {
  return http.fetchPost(`${baseUrl}/users/userInfo`, params)
}
// 注册账号
export const register = (params) => {
  return http.fetchPost(`${baseUrl}/users/register`, params)
}
// 上传图片
export const upload = (params) => {
  return http.fetchPost(`${baseUrl}/users/upload`, params)
}
// 上传图片到本地
export const uploadFile = (params) => {
  return http.fetchPost(`${baseUrl}/users/uploadFile`, params)
}
// 修改头像
export const updateheadimage = (params) => {
  return http.fetchPost(`${baseUrl}/users/updateheadimage`, params)
}
// 修改用户昵称
export const updateUserName = (params) => {
  return http.fetchPost(`${baseUrl}/users/updateUserName`, params)
}
// 首页接口
export const productHome = (params) => {
  return http.fetchGet(`${baseUrl}/goods/productHome`, params)
}


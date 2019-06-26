import axios from 'axios'

// TODO 改为配置项
var baseUrl = 'http://192.168.43.10:3031'

const service = axios.create({
    baseURL: baseUrl,
    timeout: 120000, // request timeout
    method: 'post',
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
})

// 登录token
export let requestInfo = { token: null };

service.interceptors.request.use((config) => {
    if (requestInfo.token) {
        config.headers['_TK']  = requestInfo.token
    }

    return config
}, error => {
    console.log(error) // for debug
})

service.interceptors.response.use(
  response => {
    if (response.data.code == 200) {
        return response
    } else if (response.data.code == -9004) {
        requestInfo.token = null
        console.log('token过期')

        // TODO 跳转至登录页

        return response
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error) // for debug
    return error
  })

export default service;
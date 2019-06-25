import axios from 'axios'

const service = axios.create({
    timeout: 120000, // request timeout
    method: 'post',
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
})

// 登录token
export let requestInfo = { 
    token: null
};

service.interceptors.request.use((config) => {
    if (requestInfo.token) {
        config.headers['_TK']  = requestInfo.token
    }
    config.url = global.defaultBaseUrl + config.url
    console.log('打印',config.url)


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
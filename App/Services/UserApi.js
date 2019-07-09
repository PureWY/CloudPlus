import request from './Request';

const create = () => {

  const userInfoRequest = (data) => {
    return request.post(
      '/userInfo',
      data
    )
  }

  const userInfoUpdate = (data) => {
    return request.post(
      '/userInfo/update',
      data
    )
  }

  return {
    userInfoRequest,
    userInfoUpdate
  }
}

export default {
  create
}

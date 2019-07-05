import request from './Request';

const create = () => {

  const userInfoRequest = (data) => {
    return request.post(
      '/userInfo',
      data
    )
  }

  return {
    userInfoRequest
  }
}

export default {
  create
}

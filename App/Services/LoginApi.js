import request from './Request';

const create = () => {

  const loginRequest = (data) => {
    return request.post(
      '/login',
      data
    )
  }

  return {
    loginRequest
  }
}

export default {
  create
}

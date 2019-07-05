import request from './Request';

const create = () => {

  const registerRequest = (data) => {
    return request.post(
      '/register',
      data
    )
  }

  return {
    registerRequest
  }
}

export default {
  create
}

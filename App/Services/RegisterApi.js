import request from './Request';

const create = () => {

  const registerRequest = (data) => {
      console.log('手机')
    console.log(data.phone)
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

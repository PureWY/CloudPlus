import request from './Request';

// our "constructor"
const create = () => {

  const loginRequest = (data) => {
    return request.post(
      '/imap/home/login',
      data
    )
  }

  const getRooms = (data) => {
    return request.post(
      '/imap/room/getRooms',
      data
    )
  }

  return {
    loginRequest,
    getRooms
  }
}

// let's return back our create method as the default.
export default {
  create
}

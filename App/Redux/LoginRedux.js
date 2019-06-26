import { handleActions } from 'redux-actions';
import * as actionType from '../Actions/Type';

const initialState = {
  userName: null,
  phone: null,
  fetching: false,
  error: null,
  token: null
};

const loginReducer = handleActions({
    [actionType.LOGIN_REQUEST]: (state, action) => ({
        userName: action.payload.userName,
        fetching: true,
        error: null,
        token: null
    }),
    [actionType.LOGIN_SUCCESS]: (state, action) =>({
        ...state,
        ...action.payload,
        fetching: false
        // token: action.payload.token
    }),
    [actionType.LOGIN_FAILURE]: (state, action) => ({
        ...state,
        error: '登录失败',
        fetching: false,
    })
}, initialState)

export default loginReducer;
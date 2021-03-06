import { handleActions } from 'redux-actions';
import * as actionType from '../Actions/Type';

const initialState = {
  phone: null,
  fetching: false,
  error: null,
  token: null
};

const loginReducer = handleActions({
    [actionType.LOGIN_REQUEST]: (state, action) => ({
        phone: action.payload.phone,
        fetching: true,
        error: null,
        token: null
    }),
    [actionType.LOGIN_SUCCESS]: (state, action) =>({
        ...state,
        fetching: false,
        ...action.payload
    }),
    [actionType.LOGIN_FAILURE]: (state, action) => ({
        ...state,
        error: '登录失败',
        fetching: false,
    }),
    [actionType.LOGOUT_REQUEST]: (state, action) =>({
        ...state,
        phone: null,
        token: null
    }),
}, initialState)

export default loginReducer;
import { handleActions } from 'redux-actions';
import * as actionType from '../Actions/Type';

const initialState = {
  phone: null,
  fetching: false,
  error: null
};

const registerReducer = handleActions({
    [actionType.REGISTER_REQUEST]: (state, action) => ({
        phone: action.payload.phone,
        fetching: true,
        error: null
    }),
    [actionType.REGISTER_SUCCESS]: (state, action) =>({
        ...state,
        fetching: false
    }),
    [actionType.REGISTER_FAILURE]: (state, action) => ({
        ...state,
        error: '注册失败',
        fetching: false,
    })
}, initialState)

export default registerReducer;


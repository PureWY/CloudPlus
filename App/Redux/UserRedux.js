import { handleActions } from 'redux-actions';
import * as actionType from '../Actions/Type';

const initialState = {
  phone: null,
  register_time: null
};

const userReducer = handleActions({
    [actionType.USER_INFO_REQUEST]: (state, action) => ({
        phone: action.payload.phone
    }),
    [actionType.USER_INFO_SUCCESS]: (state, action) =>({
        ...state,
        ...action.payload
    }),
    [actionType.USER_INFO_FAILURE]: (state, action) => ({
        ...state
    }),
    [actionType.USER_INFO_UPDATE]: (state, action) => ({
        ...state,
        ...action.payload
    }),
}, initialState)

export default userReducer;
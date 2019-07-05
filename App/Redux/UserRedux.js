import { handleActions } from 'redux-actions';
import * as actionType from '../Actions/Type';

const initialState = {
  phone: null,
  userName: null,
  userSign: null,
  userHeaderImg: null
};

const userReducer = handleActions({
    [actionType.USER_INFO_REQUEST]: (state, action) => ({
        phone: action.payload.phone
    }),
    [actionType.USER_INFO_SUCCESS]: (state, action) =>({
        ...state,
        ...action.payload.body
    }),
    [actionType.USER_INFO_FAILURE]: (state, action) => ({
        ...state
    })
}, initialState)

export default userReducer;
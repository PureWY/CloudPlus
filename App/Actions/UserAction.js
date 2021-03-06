import { createActions } from 'redux-actions';
import * as actionType from './Type';

export const {userInfoRequest,userInfoSuccess,userInfoFailure,userInfoUpdate} = createActions(
    actionType.USER_INFO_REQUEST,
    actionType.USER_INFO_SUCCESS,
    actionType.USER_INFO_FAILURE,
    actionType.USER_INFO_UPDATE
)

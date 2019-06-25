import { createActions } from 'redux-actions';
import * as actionType from './Type';

export const {loginRequest, loginSuccess, loginFailure} = createActions(
    actionType.LOGIN_REQUEST,
    actionType.LOGIN_SUCCESS,
    actionType.LOGIN_FAILURE
)

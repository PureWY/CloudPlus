import { createActions } from 'redux-actions';
import * as actionType from './Type';

export const {registerRequest, registerSuccess, registerFailure} = createActions(
    actionType.REGISTER_REQUEST,
    actionType.REGISTER_SUCCESS,
    actionType.REGISTER_FAILURE
)
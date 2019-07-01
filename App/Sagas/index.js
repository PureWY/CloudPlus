import { takeLatest, all } from 'redux-saga/effects'
import LoginApiCreate from '../Services/LoginApi'
import RegisterApiCreate from '../Services/RegisterApi'

import * as ActionType from '../Actions/Type'

import { login } from './LoginSaga'
import { register } from './RegisterSaga'

const loginApi = LoginApiCreate.create();
const registerApi = RegisterApiCreate.create();

export default function * root () {
  yield all([
    takeLatest(ActionType.LOGIN_REQUEST, login, loginApi)
  ])
  yield all([
    takeLatest(ActionType.REGISTER_REQUEST, register, registerApi)
  ])
}

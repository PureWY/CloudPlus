import { takeLatest, all } from 'redux-saga/effects'
import LoginApiCreate from '../Services/LoginApi'
import RegisterApiCreate from '../Services/RegisterApi'
import UserApiCreate from '../Services/UserApi'

import * as ActionType from '../Actions/Type'

import { login } from './LoginSaga'
import { register } from './RegisterSaga'
import { user, userInfoUpdate } from './UserSaga'

const loginApi = LoginApiCreate.create();
const registerApi = RegisterApiCreate.create();
const userApi = UserApiCreate.create()

export default function * root () {
  yield all([
    takeLatest(ActionType.LOGIN_REQUEST, login, loginApi),

    takeLatest(ActionType.REGISTER_REQUEST, register, registerApi),

    takeLatest(ActionType.USER_INFO_REQUEST, user, userApi),
    takeLatest(ActionType.USER_INFO_UPDATE, userInfoUpdate, userApi),
  ])
}

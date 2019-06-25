import { takeLatest, all } from 'redux-saga/effects'
import LoginApiCreate from '../Services/LoginApi'

/* ------------- Types ------------- */

import * as ActionType from '../Actions/Type'

/* ------------- Sagas ------------- */

import { login } from './LoginSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const loginApi = LoginApiCreate.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(ActionType.LOGIN_REQUEST, login, loginApi)
  ])
}

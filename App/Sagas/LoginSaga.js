import { put, select, call } from 'redux-saga/effects'
import { Alert, ToastAndroid } from 'react-native'
import { loginSuccess, loginFailure } from '../Actions/LoginAction'
import { NavigationActions } from 'react-navigation'

// process LOGIN_REQUEST actions
export function * login (api, action) {
    const {userName, passWord} = action.payload;
    let res = null
    try {   
        res = yield call(api.loginRequest, {
            userName: userName,
            passWord: passWord
        });
        if(res.data.code == '200'){
            yield put(loginSuccess(res.data.body));
            yield put(NavigationActions.navigate({routeName: 'Home'}));
        }else{
            ToastAndroid.show(res.data.message,ToastAndroid.SHORT)
            yield put(loginFailure());
        }
    }catch(ex){
        ToastAndroid.show('登录失败，请检查网络设置',ToastAndroid.SHORT)
        yield put(loginFailure());
    }
}

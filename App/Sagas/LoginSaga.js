import { put, select, call } from 'redux-saga/effects'
import { Alert, ToastAndroid } from 'react-native'
import { loginSuccess, loginFailure } from '../Actions/LoginAction'
import { NavigationActions } from 'react-navigation'

// process LOGIN_REQUEST actions
export function * login (api, action) {
    const {phone, passWord} = action.payload;
    let res = null
    try {
        res = yield call(api.loginRequest, {
            phone: phone,
            passWord: passWord
        });
        if(res.data.code == '200'){
            yield put(loginSuccess(res.data));
            yield put(NavigationActions.navigate({routeName: 'Home'}));
            storage.save({
                key: 'loginDemo',
                data: {
                    isLogin: true
                },
                expires: null
            });
        }else{
            ToastAndroid.show(res.data.message,ToastAndroid.SHORT)
            yield put(loginFailure());
        }
    }catch(ex){
        ToastAndroid.show('登录失败，请检查网络设置',ToastAndroid.SHORT)
        yield put(loginFailure());
    }
}

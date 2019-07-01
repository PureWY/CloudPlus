import { put, select, call } from 'redux-saga/effects'
import { ToastAndroid } from 'react-native'
import { registerSuccess, registerFailure } from '../Actions/RegisterAction'
import { NavigationActions } from 'react-navigation'

// process LOGIN_REQUEST actions
export function * register (api, action) {
    const {phone, passWord} = action.payload;
    let res = null
    try {
        res = yield call(api.registerRequest, {
            phone: phone,
            passWord: passWord
        });
        if(res.data.code == '200'){
            yield put(registerSuccess());
            ToastAndroid.show(res.data.message,ToastAndroid.SHORT)
        }else{
            ToastAndroid.show(res.data.message,ToastAndroid.SHORT)
            yield put(registerFailure());
        }
    }catch(ex){
        ToastAndroid.show('登录失败，请检查网络设置',ToastAndroid.SHORT)
        yield put(registerFailure());
    }
}

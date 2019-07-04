import { put, select, call } from 'redux-saga/effects'
import { Alert, ToastAndroid } from 'react-native'
import { Toast } from '@ant-design/react-native';
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
            Toast.fail(res.data.message)
            yield put(loginFailure());
        }
    }catch(ex){
        Toast.offline('登录失败，请检查网络设置')
        yield put(loginFailure());
    }
}

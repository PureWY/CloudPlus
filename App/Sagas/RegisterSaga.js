import { put, select, call } from 'redux-saga/effects'
import { Toast } from '@ant-design/react-native';
import { registerSuccess, registerFailure } from '../Actions/RegisterAction'
import { NavigationActions } from 'react-navigation'

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
            Toast.success(res.data.message)
        }else{
            Toast.fail(res.data.message)
            yield put(registerFailure());
        }
    }catch(ex){
        Toast.offline('登录失败，请检查网络设置')
        yield put(registerFailure());
    }
}

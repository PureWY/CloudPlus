import { put, select, call } from 'redux-saga/effects'
import { Toast } from '@ant-design/react-native';
import { userInfoSuccess, userInfoFailure } from '../Actions/UserAction'

export function * user (api, action) {
    const {phone} = action.payload;
    let res = null
    try {
        res = yield call(api.userInfoRequest, {
            phone: phone
        });
        if(res.data.code == '200'){
            console.log("查询个人信息")
            console.log(res.data.body)
            yield put(userInfoSuccess(res.data.body));
        }else{
            Toast.fail(res.data.message)
            yield put(userInfoFailure());
        }
    }catch(ex){
        Toast.offline('获取用户信息失败')
        yield put(userInfoFailure());
    }
}

export function * userInfoUpdate (api, action) {
    console.log('传入的')
    console.log(action.payload)
    let res = null
    try {
        res = yield call(api.userInfoUpdate, {
            ...action.payload
        });
        if(res.data.code == '200'){
            yield put(userInfoSuccess(action.payload));
        }else{
            Toast.fail(res.data.message)
            yield put(userInfoFailure());
        }
    }catch(ex){
        Toast.offline('更新用户信息失败')
        yield put(userInfoFailure());
    }
}

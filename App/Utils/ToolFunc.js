import { Alert, ToastAndroid } from 'react-native'

// 验证输入有效性
function toast(remind){
    ToastAndroid.show(remind,ToastAndroid.SHORT)
}

// 验证正则匹配性
function regInput(reg,val,remind){
    if(!reg.test(val)){
        ToastAndroid.show(remind,ToastAndroid.SHORT)
        return false
    }
    return true
}

export { toast, regInput }
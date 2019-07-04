import { Toast } from '@ant-design/react-native';

// 验证正则匹配性
function regInput(reg,val,remind){
    if(!reg.test(val)){
        Toast.fail(remind)
        return false
    }
    return true
}

export { regInput }
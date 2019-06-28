import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../Views/Login/Styles/LoginStyle'

export default class PhoneLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            checkCode: ''
        }
    }

    onChange(val,type){
        if(type == 'phone'){
            this.setState({
                phone: val
            },()=>{
                this.props.changeInfo(this.state)
            })
        }else{
            this.setState({
                checkCode: val
            },()=>{
                this.props.changeInfo(this.state)
            })
        }
    }

    render(){
        return (
            <View style={styles.loginBox}>
                <InputItem value={this.state.phone}
                    onChange={(val) => {this.onChange(val,'phone')}}
                    style={styles.inputStyle}
                    placeholder="请输入手机号码"
                    last="true"
                    labelNumber={1.5}
                >
                <Feather
                    style={styles.formIconStyle}
                    name={'smartphone'}
                    size={20}
                />
                </InputItem>
                <WhiteSpace size="lg" />
                <View style={styles.codeBox}>
                    <View style={styles.inputContainer}>
                    <InputItem value={this.state.checkCode} 
                        onChange={(val) => {this.onChange(val,'checkCode')}}
                        style={styles.inputStyle}
                        labelNumber={1.5}
                        placeholder="请输入验证码"
                        last="true"
                    >
                    <Feather
                        style={styles.formIconStyle}
                        name={'mail'}
                        size={20}
                    />
                    </InputItem>  
                    </View> 
                    <View style={styles.codeContainer}>
                    <Button style={styles.codeBtn}>
                        <Text style={styles.codeFont}>验证码</Text>
                    </Button>
                    </View>
                </View>
                <WhiteSpace size="lg" /> 
                <View style={styles.forgetPassword}>
                    <Text style={styles.passwordStyle}>{this.props.msg}忘记密码？</Text>
                </View>   
                <WhiteSpace size="lg" /> 
                <Button type="primary" onPress={() => { this.props.toLogin() }} style={styles.loginBtn}>登录</Button>
                <WhiteSpace size="lg" /> 
                <Button onPress={()=>{this.props.toRegister()}} style={styles.registerBtn}>
                    <Text style={styles.mainColorFont}>注册</Text>
                </Button>
            </View>
        )
    }
}
import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../Views/Login/Styles/LoginStyle'

export default class AccountLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            passWord: ''
        }
    }

    onChange(val,name){
        if(name == 'userName'){
            this.setState({
                userName: val
            },()=>{
                this.props.changeInfo(this.state)
            })
        }else{
            this.setState({
                passWord: val
            },()=>{
                this.props.changeInfo(this.state)
            })
        }
    }

    render(){
        return (
            <View style={styles.loginBox}>
                <InputItem value={this.state.userName} 
                    onChange={(val) => {this.onChange(val,'userName')}}
                    style={styles.inputStyle}
                    placeholder="请输入账号"
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
                <InputItem type="password" value={this.state.passWord} 
                    onChange={(val) => {this.onChange(val,'passWord')}}
                    labelNumber={1.5}
                    style={styles.inputStyle}
                    placeholder="请输入密码"
                    last="true"
                >
                <Feather
                    style={styles.formIconStyle}
                    name={'lock'}
                    size={20}
                />
                </InputItem>
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
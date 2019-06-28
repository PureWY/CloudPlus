import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import { Alert, ToastAndroid } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../Views/Login/Styles/LoginStyle'

export default class PhoneLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            checkCode: '',
            passWord: '',
            getCoding: false,
            count: 10
        }
    }

    onChange(val,type){
        if(type == 'phone'){
            this.setState({
                phone: val
            },()=>{
                this.props.changeInfo(this.state.phone,this.state.checkCode)
            })
        }else{
            this.setState({
                checkCode: val
            },()=>{
                this.props.changeInfo(this.state.phone,this.state.checkCode)
            })
        }
    }

    getAuthCode(){
      if(this.state.getCoding) return
      let reg = /^(\d){11}$/
      // let reg = /^((1)3(\d){9}$)|(^(1)4[5-9](\d){8}$)|(^(1)5[^4]{9}$)|(^(1)66(\d){8}$)|(^(1)7[0-8](\d){8}$)|(^(1)8(\d){9}$)|(^(1)9[8-9](\d){8}$)/
      if(!reg.test(this.state.phone)){
        ToastAndroid.show('请输入有效的手机号码',ToastAndroid.SHORT)
        return
      }
      this.setState({
        getCoding: true 
      },() => {
        ToastAndroid.show('验证码已发送',ToastAndroid.SHORT)
      })
      let countTime = setInterval(() => {
        if(this.state.count === 1) {
          clearInterval(countTime)
          this.setState({
            getCoding: false
          })
        }
        this.setState({
          count: --this.state.count
        })
      },1000)
    }

    render(){
        return (
            <View style={styles.registerBox}>
          <InputItem type="number" value={this.state.phone} 
            onChange={value => {
              this.setState({
                phone: value,
              });
            }}
            style={styles.inputStyle}
            labelNumber={1.5}
            placeholder="请输入手机号"
            last="true"
          >
          <Feather
            style={styles.formIconStyle}
            name={'smartphone'}
            size={20}
          />
          </InputItem>
          <WhiteSpace size="lg" />
          <InputItem type="password" value={this.state.passWord} 
            onChange={value => {
              this.setState({
                passWord: value,
              });
            }}
            style={styles.inputStyle}
            labelNumber={1.5}
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
          <View style={styles.codeBox}>
            <View style={styles.inputContainer}>
              <InputItem value={this.state.checkCode} 
                onChange={value => {
                  this.setState({
                    checkCode: value,
                  });
                }}
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
              <Button onPress={()=>{this.getAuthCode()}} style={styles.codeBtn}>
                {this.state.getCoding?(
                  <Text style={styles.codeFont}>{this.state.count} s</Text>
                ):(
                  <Text style={styles.codeFont}>验证码</Text>
                )}
              </Button>
            </View>
          </View>
          <WhiteSpace size="lg" /> 
          <Button type="primary" onPress={() => { this.props.doRegister() }} style={styles.loginBtn}>注册</Button>
          <WhiteSpace size="lg" /> 
          <Button onPress={()=>{this.props.backLogin()}} style={styles.registerBtn}>
            <Text style={styles.mainColorFont}>返回登录</Text>
          </Button>
      </View>
        )
    }
}
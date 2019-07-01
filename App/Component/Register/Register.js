import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import { ToastAndroid } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../Views/Login/Styles/LoginStyle'
import { toast, regInput } from '../../Utils/ToolFunc'
import { phoneReg, numberReg, passReg } from '../../Utils/Regx'

export default class PhoneLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            checkCode: '',
            passWord: '',
            getCoding: false,
            count: 10,
            randomCode: null
        }
    }

    getAuthCode(){
      if(this.state.getCoding) return
      let reg = /^(\d){11}$/
      // let reg = /^((1)3(\d){9}$)|(^(1)4[5-9](\d){8}$)|(^(1)5[^4]{9}$)|(^(1)66(\d){8}$)|(^(1)7[0-8](\d){8}$)|(^(1)8(\d){9}$)|(^(1)9[8-9](\d){8}$)/
      let real = regInput(reg,this.state.phone,'请输入有效的手机号码')
      if(!real){
        return
      }
      this.setState({
        getCoding: true 
      },() => {
        ToastAndroid.show('验证码已发送',ToastAndroid.SHORT)
        // this.randomCode = (Math.random() + '0').substring(2,8)
        this.setState({
          randomCode: '123123'
        })
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

    toRegister(){
      if(!phoneReg.test(this.state.phone)){
        toast('请输入有效的手机号码')
        return
      }else if(!passReg.test(this.state.passWord)){
        toast('请输入6到8位数字或字母格式的密码')
        return
      }
      if(this.state.checkCode != this.state.randomCode){
        toast('验证码错误')
        return
      }

      this.props.doRegister(this.state.phone,this.state.passWord)
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
            maxLength={11}
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
            maxLength={8}
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
                    checkCode: value
                  });
                }}
                maxLength={6}
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
          <Button type="primary" onPress={() => { this.toRegister() }} style={styles.loginBtn}>注册</Button>
          <WhiteSpace size="lg" /> 
          <Button onPress={()=>{this.props.backLogin()}} style={styles.registerBtn}>
            <Text style={styles.mainColorFont}>返回登录</Text>
          </Button>
      </View>
        )
    }
}
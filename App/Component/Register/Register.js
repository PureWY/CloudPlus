import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../Views/Login/Styles/LoginStyle'

export default class PhoneLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            checkCode: '',
            passWord: ''
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

    render(){
        return (
            <View style={styles.registerBox}>
          <InputItem value={this.state.userName} 
            onChange={value => {
              this.setState({
                userName: value,
              });
            }}
            style={styles.inputStyle}
            labelNumber={1.5}
            placeholder="请输入手机号"
            last="true"
          >
          <FontAwesome
            style={styles.formIconStyle}
            name={'mobile'}
            size={30}
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
           <FontAwesome
            style={styles.formIconStyle}
            name={'lock'}
            size={25}
          />
          </InputItem>
          <WhiteSpace size="lg" /> 
          <View style={styles.codeBox}>
            <View style={styles.inputContainer}>
              <InputItem value={this.state.checkCode} 
                onChange={value => {
                  this.setState({
                    passWord: value,
                  });
                }}
                style={styles.inputStyle}
                labelNumber={1.5}
                placeholder="请输入验证码"
                last="true"
              >
              <FontAwesome
                style={styles.formIconStyle}
                name={'check-square'}
                size={22}
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
          <Button type="primary" onPress={() => { this.props.doRegister() }} style={styles.loginBtn}>注册</Button>
          <WhiteSpace size="lg" /> 
          <Button onPress={()=>{this.props.backLogin()}} style={styles.registerBtn}>
            <Text style={styles.mainColorFont}>返回登录</Text>
          </Button>
      </View>
        )
    }
}
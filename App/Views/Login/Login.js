import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { loginRequest } from '../../Actions/LoginAction'

import AccountLogin from '../../Component/AccountLogin/AccountLogin'
import PhoneLogin from '../../Component/PhoneLogin/PhoneLogin'
import Register from '../../Component/Register/Register'

// Styles
import styles from './Styles/LoginStyle'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccountLogin: true,
      isRegister: false,
      isPhoneLogin: false,
      chooseAccount: true
    };

    this.checkLoginType = this.checkLoginType.bind(this)
  }

  login() {
    this.props.loginRequest({
        userName: this.state.userName,
        passWord: this.state.passWord
    })
  }

  handleRegister(){
    console.log("开始注册")
  }

  insertForm(val){
    this.setState({
      ...this.state,
      ...val
    })
  }

  checkLoginType(type){
    if(type === 'account' && this.state.isAccountLogin) return
    if(type === 'phone' && this.state.isPhoneLogin) return
    
    this.setState({
      isAccountLogin: !this.state.isAccountLogin,
      isPhoneLogin: !this.state.isPhoneLogin
    })
  }

  toRegister(){
    this.setState({
      isAccountLogin: false,
      isPhoneLogin: false,
      isRegister: true
    })
  }

  backLogin(){
    this.setState({
      isAccountLogin: true,
      isPhoneLogin: false,
      isRegister: false
    })
  }

  chooseCard = () => {
    if(this.state.isAccountLogin){
      return (<AccountLogin toLogin={()=>{this.login()}} toRegister={()=>{this.toRegister()}} changeInfo={(val)=>{this.insertForm(val)}}/>)
    }else if(this.state.isRegister){
      return (<Register backLogin={()=>{this.backLogin()}} doRegister={()=>{this.handleRegister()}} />)
    }else{
      return (<PhoneLogin toLogin={()=>{this.login()}} toRegister={()=>{this.toRegister()}} changeInfo={(val)=>{this.insertForm(val)}}/>)
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#5175F0"
        />
        {/* <Image source={Images.cloudMain} style={[styles.backgroundImage,styles.launchBackground]} resizeMode='stretch' /> */}
        <ScrollView style={styles.container}>
          <View style={styles.loginHeader}>
            <Text style={styles.sectionText}>云 加 </Text>
          </View>

          <View style={styles.loginContainer} >
            <View style={styles.loginType}>
              <Text onPress={()=>{this.checkLoginType('account')}} style={this.state.isAccountLogin?styles.subTitle:styles.noChoose}>账号密码登录</Text>
              <Text style={styles.subTitle}>|</Text>
              <Text onPress={()=>{this.checkLoginType('phone')}} style={!this.state.isAccountLogin?styles.subTitle:styles.noChoose}>手机号快捷登录</Text>
            </View>
            
            {this.chooseCard()}

          <View style={styles.othersLogin}>
              <View style={styles.othersHeader}>
                <WhiteSpace size="lg" /> 
                <Text style={styles.othersFont}>第三方账号登录</Text>
              </View>
              <WhiteSpace size="lg" /> 
              <View style={styles.othersIcon}>
                <FontAwesome
                  style={styles.iconStyle}
                  name={'qq'}
                  size={30}
                />
                <FontAwesome
                  style={styles.iconStyle}
                  name={'wechat'}
                  size={30}
                />
                <FontAwesome
                  style={styles.iconStyle}
                  name={'weibo'}
                  size={30}
                />
              </View>
          </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginRequest: (userName, passWord) => dispatch(loginRequest(userName, passWord))
  }
}

const mapStateToProps = (state) => {
  return {
      fetching: state.login.fetching
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

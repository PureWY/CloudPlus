import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'
import { loginRequest } from '../../Actions/LoginAction'
import { registerRequest } from '../../Actions/RegisterAction'

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

  componentDidMount() {
    SplashScreen.hide();
  }

  login() {
    this.props.loginRequest({
      phone: this.state.phone,
      passWord: this.state.passWord
    })
  }

  handleRegister(phone,passWord){
    this.props.registerRequest({
      phone: phone,
      passWord: passWord
    })
  }

  insertForm(val){
    this.setState({
      ...this.state,
      ...val
    })
  }

  checkLoginType(type){
    console.log(type)
    if(this.state.isRegister) return
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
      isAccountLogin: false,
      isPhoneLogin: true,
      isRegister: false
    })
  }

  chooseCard = () => {
    if(this.state.isAccountLogin){
      return (<AccountLogin toLogin={()=>{this.login()}} toRegister={()=>{this.toRegister()}} changeInfo={(val)=>{this.insertForm(val)}}/>)
    }else if(this.state.isRegister){
      return (<Register backLogin={()=>{this.backLogin()}} doRegister={(phone,passWord)=>{this.handleRegister(phone,passWord)}} />)
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
            {this.state.isRegister ? (<View style={styles.loginType}>
              <Text style={styles.subTitle}>手机号快速注册</Text>
            </View>) : (
              <View style={styles.loginType}>
                <Text onPress={()=>{this.checkLoginType('account')}} style={this.state.isAccountLogin?styles.subTitle:styles.noChoose}>账号密码登录</Text>
                <Text style={styles.subTitle}>|</Text>
                <Text onPress={()=>{this.checkLoginType('phone')}} style={!this.state.isAccountLogin?styles.subTitle:styles.noChoose}>手机号快捷登录</Text>
              </View>
            )}            
            {this.chooseCard()}

          <View style={styles.othersLogin}>
              <View style={styles.othersHeader}>
                <WhiteSpace size="lg" /> 
                <Text style={styles.othersFont}>第三方账号登录</Text>
              </View>
              <WhiteSpace size="lg" /> 
              <View style={styles.othersIcon}>
                <FontAwesome5
                  style={styles.iconStyle}
                  name={'qq'}
                  size={27}
                />
                <FontAwesome5
                  style={styles.iconStyle}
                  name={'weixin'}
                  size={30}
                />
                <FontAwesome5
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
      loginRequest: (userName, passWord) => dispatch(loginRequest(userName, passWord)),
      registerRequest: (phone, passWord) => dispatch(registerRequest(phone,passWord))
  }
}

const mapStateToProps = (state) => {
  return {
      fetching: state.login.fetching
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

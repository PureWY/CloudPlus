import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { loginRequest } from '../../Actions/LoginAction'

// Styles
import styles from './Styles/LoginStyle'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      confirmPass: '',
      checkCode: '',
      phone: '',
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

  checkLoginType(){
    this.setState({
      chooseAccount: !this.state.chooseAccount,
      isPhoneLogin: !this.state.isPhoneLogin
    })
  }

  toRegister(){
    this.setState({
      isRegister: !this.state.isRegister,
      userName: '',
      passWord: '',
      confirmPass: '',
      checkCode: '',
      phone: ''
    })
  }

  loginComponent = () => {
    return (
      <View style={styles.loginBox}>
        {this.state.isPhoneLogin?
          <InputItem value={this.state.userName} 
            onChange={value => {
              this.setState({
                userName: value,
              });
            }}
            style={styles.inputStyle}
            placeholder="请输入手机号码"
            last="true"
            labelNumber={1.5}
          >
          <FontAwesome
            style={styles.formIconStyle}
            name={'mobile'}
            size={30}
          />
          </InputItem>:
          <InputItem value={this.state.userName} 
          onChange={value => {
            this.setState({
              userName: value,
            });
          }}
          style={styles.inputStyle}
          placeholder="请输入账号"
          last="true"
          labelNumber={1.5}
        >
        <FontAwesome
          style={styles.formIconStyle}
          name={'mobile'}
          size={30}
        />
        </InputItem>}
          <WhiteSpace size="lg" />
          {this.state.isPhoneLogin?
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
       </View>:
      <InputItem type="password" value={this.state.passWord} 
      onChange={value => {
        this.setState({
          passWord: value,
        });
      }}
      labelNumber={1.5}
      style={styles.inputStyle}
      placeholder="请输入密码"
      last="true"
    >
    <FontAwesome
      style={styles.formIconStyle}
      name={'lock'}
      size={25}
    />
    </InputItem>}
          <WhiteSpace size="lg" /> 
          <View style={styles.forgetPassword}>
            <Text style={styles.passwordStyle}>忘记密码？</Text>
          </View>   
          <WhiteSpace size="lg" /> 
          <Button type="primary" onPress={() => { this.login() }} style={styles.loginBtn}>登录</Button>
          <WhiteSpace size="lg" /> 
          <Button onPress={()=>{this.toRegister()}} style={styles.registerBtn}>
            <Text style={styles.mainColorFont}>注册</Text>
          </Button>
      </View>
    )
  }

  registerComponent = () => {
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
          <Button type="primary" onPress={() => { this.login() }} style={styles.loginBtn}>注册</Button>
          <WhiteSpace size="lg" /> 
          <Button onPress={()=>{this.toRegister()}} style={styles.registerBtn}>
            <Text style={styles.mainColorFont}>返回登录</Text>
          </Button>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#5175F0"
        />
        {/* <Image source={Images.cloudMain} style={[styles.backgroundImage,styles.launchBackground]} resizeMode='stretch' /> */}
        <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
          <View style={styles.loginHeader}>
            <Text style={styles.sectionText}>云 加 </Text>
          </View>

          <View style={styles.loginContainer} >
            <View style={styles.loginType}>
              <Text onPress={()=>{this.checkLoginType()}} style={this.state.chooseAccount?styles.subTitle:styles.noChoose}>账号密码登录</Text>
              <Text style={styles.subTitle}>|</Text>
              <Text onPress={()=>{this.checkLoginType()}} style={!this.state.chooseAccount?styles.subTitle:styles.noChoose}>手机号快捷登录</Text>
            </View>

            {this.state.isRegister?this.registerComponent() : this.loginComponent()}

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

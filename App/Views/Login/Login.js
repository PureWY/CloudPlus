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
      passWord: ''
    };
  }

  login() {
    this.props.loginRequest({
        userName: this.state.userName,
        passWord: this.state.passWord
    })
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
              <Text style={styles.subtitle}>账号密码登录</Text>
              <Text style={styles.subtitle}>|</Text>
              <Text style={styles.subtitle}>手机号快捷登录</Text>
            </View>

            <View style={styles.loginBox}>
                <InputItem clear type="phone" value={this.state.userName} 
                  onChange={value => {
                    this.setState({
                      userName: value,
                    });
                  }}
                  style={styles.inputStyle}
                  labelNumber={2}
                  placeholder="请输入账号"
                  last="true"
                >
                账号
                </InputItem>
                <WhiteSpace size="lg" />
                <InputItem clear type="password" value={this.state.passWord} 
                  onChange={value => {
                    this.setState({
                      passWord: value,
                    });
                  }}
                  style={styles.inputStyle}
                  labelNumber={2}
                  placeholder="请输入密码"
                  last="true"
                >
                密码
                </InputItem>
                <WhiteSpace size="lg" /> 
                <View style={styles.forgetPassword}>
                  <Text style={styles.passwordStyle}>忘记密码？</Text>
                </View>   
                <WhiteSpace size="lg" /> 
                <Button type="primary" onPress={() => { this.login() }} style={styles.loginBtn}>登录</Button>
                <WhiteSpace size="lg" /> 
                <Button style={styles.registerBtn}>
                  <Text style={styles.mainColorFont}>注册</Text>
                </Button>
            </View>

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

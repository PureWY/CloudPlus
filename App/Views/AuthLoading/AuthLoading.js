import React from 'react';
import { connect } from 'react-redux'
import { loginSuccess } from '../../Actions/LoginAction'
import SplashScreen from 'react-native-splash-screen'
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync(){
    storage.load({
      key: 'loginDemo',
      autoSync: true,
      syncInBackground: true,
    }).then(res => {
      console.log(res)
      if(res.userToken){
        this.props.loginSuccess({token: res.userToken,phone: res.phone})
        SplashScreen.hide()
        this.props.navigation.navigate(res.userToken ? 'Home' : 'Login');
      }
    }).catch(err => {
      this.props.navigation.navigate('Login')
    }) 
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginSuccess: (token,phone) => dispatch(loginSuccess(token,phone))
  }
}

const mapStateToProps = (state) => {
  return {
      state: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
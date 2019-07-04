import React from 'react';
import { connect } from 'react-redux'
import { loginSuccess } from '../../Actions/LoginAction'
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
        this.props.loginSuccess({token: res.userToken})
        this.props.navigation.navigate(userToken ? 'Home' : 'Login');
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
      loginSuccess: () => dispatch(loginSuccess())
  }
}

const mapStateToProps = (state) => {
  return {
      state: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
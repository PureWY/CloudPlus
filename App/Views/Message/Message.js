import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { loginRequest } from '../../Actions/LoginAction'

// Styles
import styles from './Styles/MessageStyle'

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: ''
    };
  }

  componentDidMount(){
    console.log(this.props)
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#3C83E9"
        />
        
        <Text>消息页面</Text>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      // loginRequest: (userName, passWord) => dispatch(loginRequest(userName, passWord))
  }
}

const mapStateToProps = (state) => {
  return {
      state: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)

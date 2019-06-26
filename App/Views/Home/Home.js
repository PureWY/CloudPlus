import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { loginRequest } from '../../Actions/LoginAction'

// Styles
import styles from './Styles/HomeStyle'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: ''
    };
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#5175F0"
        />
        
        <Text>主页面</Text>
      </View>
    )
  }
}
import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import { loginRequest } from '../../Actions/LoginAction'

// Styles
import styles from './Styles/HomeStyle'

class Home extends Component {
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
        />
        <View style={styles.c_homeContainer}>
          <Image
          resizeMode="stretch"
          source={require('../../Images/home.png')}
          style={styles.b_homeImg}
          />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)

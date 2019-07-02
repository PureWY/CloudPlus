import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'
import { loginRequest } from '../../Actions/LoginAction'

// Styles
import styles from './Styles/UserStyle'

class User extends Component {
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
    const Item = List.Item;
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#3C83E9"
        />

        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <View>
            <Image
              style={styles.headerImgStyle}
              source={require('../../Images/header.jpg')}
            />
            </View>
            <View style={styles.headerName}>
              <Text style={styles.userName}>天青色等烟雨</Text>
              <Text style={styles.userSign}>你犹如传世的青花瓷那般飘逸</Text>
            </View>
          </View>
        </View>
        <WhiteSpace size="lg" />
        <View style={styles.c_optionMenu}>
          <List>
          <Item
            thumb={
              <FontAwesome5 
              style={styles.optionIcon}
              name={'calendar-check'}
              size={20}
              />
            }
            extra={
              <FontAwesome5 
              style={styles.optionIcon}
              name={'chevron-right'}
              size={20}
              />
            }
            arrow="empty"
          >
          <Text style={styles.b_optionFont}>每日签到</Text>
          </Item>
          <Item
            thumb={
              <FontAwesome5 
              style={styles.optionIcon}
              name={'cog'}
              size={20}
              />
            }
            extra={
              <FontAwesome5 
              style={styles.optionIcon}
              name={'chevron-right'}
              size={20}
              />
            }
            arrow="empty"
          >
          <Text style={styles.b_optionFont}>个人中心</Text>
          </Item>
          </List>
          <View style={styles.c_logoutBtn}>
            <Button
            type="warning"
            >退出登录</Button>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(User)

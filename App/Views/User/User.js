import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace, Modal } from '@ant-design/react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'
import { logoutRequest } from '../../Actions/LoginAction'
import { userInfoRequest } from '../../Actions/UserAction'

// Styles
import styles from './Styles/UserStyle'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      visible: false,
    };
  }

  componentDidMount(){
    console.log(this.props.state)
    this.getUserInfo()
  }

  getUserInfo(){
    console.log(this.props.state.phone)
    this.props.userInfoRequest({
      phone: this.props.state.login.phone
    })
  }

  onClose(){
    this.setState({
      visible: false,
    });
  };

  handleLogout(){
    this.setState({
      visible: false
    },()=>{
      this.props.logoutRequest()
      // 清除登录状态
      storage.remove({
        key: 'loginDemo'
      });
      this.props.navigation.navigate('Login')
    });
  }

  render () {
    const loginState = this.props.state.login
    const userState = this.props.state.user
    const Item = List.Item;
    const footerButtons = [
      { text: '取消', onPress: () => {this.onClose()} },
      { text: '确定', onPress: () => {this.handleLogout()} },
    ];

    return (
      <View style={styles.mainContainer}>
        <StatusBar
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
              <Text style={styles.userName}>{userState.user_name?userState.user_name:loginState.phone}</Text>
              <Text style={styles.userSign}>{userState.user_sign?userState.user_sign:'设置一个签名吧'}</Text>
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
            onPress={()=>{
              this.props.navigation.navigate('SignIn')
            }}
            arrow="empty"
          >
          <Text style={styles.b_optionFont}>每日签到</Text>
          </Item>
          <Item
            thumb={
              <FontAwesome5 
              style={styles.optionIcon}
              name={'mail-bulk'}
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
          <Text style={styles.b_optionFont}>意见反馈</Text>
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
            onPress={()=>{
              this.props.navigation.navigate('Setting')
            }}
          >
          <Text style={styles.b_optionFont}>设置</Text>
          </Item>
          </List>
          <View style={styles.c_logoutBtn}>
            <Button
            onPress={() => this.setState({ visible: true })}
            type="warning"
            >退出登录</Button>
          </View>
          <Modal
            title="提示"
            transparent
            maskClosable
            visible={this.state.visible}
            footer={footerButtons}
          >
            <View style={{ paddingVertical: 20 }}>
              <Text style={{ textAlign: 'center' }}>是否确定退出登录？</Text>
            </View>
        </Modal>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      logoutRequest: () => dispatch(logoutRequest()),
      userInfoRequest: (phone) => dispatch(userInfoRequest(phone))
  }
}

const mapStateToProps = (state) => {
  return {
      state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)

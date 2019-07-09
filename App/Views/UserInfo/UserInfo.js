import React, { Component } from 'react'
import { ScrollView, Text, Image, TextInput, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'
import { userInfoRequest, userInfoUpdate } from '../../Actions/UserAction'


// Styles
import styles from './Styles/UserInfoStyle'

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      user_name: '',
      user_sign: '',
      register_time: '',
      user_sex: '',
      user_birthday: '',
      user_location: '',
      user_hometown: '',
      user_company: '',
      editTitle: '编辑'
    }
  }

  static navigationOptions = ({ navigation }) => {
    let { state } = navigation
    return {
        headerRight: (<Text 
          onPress={navigation.getParam('checkEditTitle')} 
          style={navigation.getParam('editTitle') == '保存' ? styles.b_saveBtn : styles.b_editBtn}>
          {navigation.getParam('editTitle','编辑')}
        </Text>),
        headerRightContainerStyle: {
            paddingRight: 20
        }
    };
  };

  componentDidMount(){
    this.getUserInfo()
    this.props.navigation.setParams({
      checkEditTitle: this.checkEditTitle,
      editTitle: '编辑'
    })
  }

  checkEditTitle = () => {
    console.log(this.props.state)
    this.setState({
        isEdit: !this.state.isEdit
    })
    if(this.props.navigation.getParam('editTitle') == '编辑'){
      this.props.navigation.setParams({
        editTitle: '保存'
      })
    }else{
      let { isEdit,editTitle,register_time,...otherParams } = this.state
      this.props.userInfoUpdate({
        phone: this.props.state.phone,
        ...otherParams
      })
      this.props.navigation.setParams({
        editTitle: '编辑'
      }) 
    }
  }

  getUserInfo(){
    this.props.userInfoRequest({
      phone: this.props.state.phone
    })
  }

  render () {
    const Item = List.Item;

    return (
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle="light-content"
        />
        <View>
          <List renderHeader={'账号信息'}>
            <Item
              thumb={<Text style={styles.b_leftInfo}>昵称</Text>}
            >
              {this.state.isEdit ?
                <TextInput
                style={styles.b_formInput}
                value={this.state.user_name}
                placeholder='请输入昵称'
                onChangeText={value => {
                  this.setState({
                    user_name: value,
                  });
                }}
              />:<Text style={styles.b_rightInfo}>{this.props.state.user_name}</Text>}
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>签名</Text>}
            >
              {this.state.isEdit ?
                <TextInput
                placeholder='请输入签名'
                style={styles.b_formInput}
                value={this.state.user_sign}
                onChangeText={value => {
                  this.setState({
                    user_sign: value,
                  });
                }}
              />:
              <Text style={styles.b_rightInfo}>{this.props.state.user_sign}</Text>}
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>注册时间</Text>}
            >
              <Text style={styles.b_rightInfo}>{this.props.state.register_time}</Text>
            </Item>
          </List>

          <List renderHeader={'个人信息'}>
            <Item
              thumb={<Text style={styles.b_leftInfo}>性别</Text>}
            >
            {this.state.isEdit ?
                <TextInput
                placeholder='请输入性别'
                style={styles.b_formInput}
                value={this.state.user_sex}
                onChangeText={value => {
                  this.setState({
                    user_sex: value,
                  });
                }}
              />:
              <Text style={styles.b_rightInfo}>{this.props.state.user_sex}</Text>}
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>生日</Text>}
            >
            {this.state.isEdit ?
                <TextInput
                placeholder='请选择生日'
                style={styles.b_formInput}
                value={this.state.user_birthday}
                onChangeText={value => {
                  this.setState({
                    user_birthday: value,
                  });
                }}
              />:
              <Text style={styles.b_rightInfo}>{this.props.state.user_birthday}</Text>}
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>所在地</Text>}
            >
            {this.state.isEdit ?
                <TextInput
                placeholder='请输入所在地'
                style={styles.b_formInput}
                value={this.state.user_location}
                onChangeText={value => {
                  this.setState({
                    user_location: value,
                  });
                }}
              />:
              <Text style={styles.b_rightInfo}>{this.props.state.user_location}</Text>}
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>故乡</Text>}
            >
            {this.state.isEdit ?
                <TextInput
                placeholder='请输入故乡'
                style={styles.b_formInput}
                value={this.state.user_hometown}
                onChangeText={value => {
                  this.setState({
                    user_hometown: value,
                  });
                }}
              />:
              <Text style={styles.b_rightInfo}>{this.props.state.user_hometown}</Text>}
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>公司</Text>}
            >
            {this.state.isEdit ?
                <TextInput
                placeholder='请输入公司'
                style={styles.b_formInput}
                value={this.state.user_company}
                onChangeText={value => {
                  this.setState({
                    user_company: value,
                  });
                }}
              />:
              <Text style={styles.b_rightInfo}>{this.props.state.user_company}</Text>}
            </Item>
          </List>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      userInfoRequest: (phone) => dispatch(userInfoRequest(phone)),
      userInfoUpdate: (userInfo) => dispatch(userInfoUpdate(userInfo))
  }
}

const mapStateToProps = (state) => {
  return {
      state: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)

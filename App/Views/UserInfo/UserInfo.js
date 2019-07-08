import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'

// Styles
import styles from './Styles/UserInfoStyle'

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
        headerRight: <Text style={styles.b_editBtn}>编辑</Text>,
        headerRightContainerStyle: {
            paddingRight: 20
        }
    };
  };

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
              <Text style={styles.b_rightInfo}>天青色等烟雨</Text>
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>签名</Text>}
            >
              <Text style={styles.b_rightInfo}>世界如此之大</Text>
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>注册时间</Text>}
            >
              <Text style={styles.b_rightInfo}>2019-07-08</Text>
            </Item>
          </List>

          <List renderHeader={'个人信息'}>
            <Item
              thumb={<Text style={styles.b_leftInfo}>性别</Text>}
            >
              <Text style={styles.b_rightInfo}>男</Text>
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>生日</Text>}
            >
              <Text style={styles.b_rightInfo}>1996-07-26</Text>
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>所在地</Text>}
            >
              <Text style={styles.b_rightInfo}>江苏南京</Text>
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>故乡</Text>}
            >
              <Text style={styles.b_rightInfo}>安徽池州</Text>
            </Item>
            <Item
              thumb={<Text style={styles.b_leftInfo}>公司</Text>}
            >
              <Text style={styles.b_rightInfo}>上海汉得信息技术股份有限公司</Text>
            </Item>
          </List>
          


        </View>
      </View>
    )
  }
}
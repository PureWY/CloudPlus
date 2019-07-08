import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Button, InputItem, List, WhiteSpace } from '@ant-design/react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SettingStyle'

export default class Setting extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const Item = List.Item;

    return (
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.c_settingContainer}>
          <View style={styles.insulateView}>
          </View>
          <List>
            <Item
              extra={
                <FontAwesome5 
                style={styles.optionIcon}
                name={'chevron-right'}
                size={20}
                />
              }
              arrow="empty"
              onPress={()=>{this.props.navigation.navigate('UserInfo')}}
            >
              <Text style={styles.b_optionFont}>个人信息</Text>
            </Item>
          </List>

          <View style={styles.insulateView}>
          </View>
          
          <List>
            <Item
              extra={
                <FontAwesome5 
                style={styles.optionIcon}
                name={'chevron-right'}
                size={20}
                />
              }
              arrow="empty"
            >
              <Text style={styles.b_optionFont}>关于我们</Text>
            </Item>
          </List>


        </View>
      </View>
    )
  }
}
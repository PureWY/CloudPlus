import React, { Component } from 'react'
import { FlatList, Text, Image, View, StatusBar } from 'react-native'
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
      passWord: '',
      demoData: [{
        id: '1',
        name: '青姐',
        message: '任务已经给你安排过了,这次不能有半点闪失，一定要按质按量的完成，我相信你的能力',
        time: '12:09'
      },{
        id: '2',
        name: '佳佳',
        message: '我待会回家了',
        time: '11:08',
        headerImg: '../../Images/header.jpg'
      },{
        id: '3',
        name: '孙玉竹',
        message: '事情太多了吧',
        time: '09:54',
        headerImg: '../../Images/header.jpg'
      },{
        id: '4',
        name: '李开祖',
        message: '怎么还没有开发完',
        time: '14:33',
        headerImg: '../../Images/header.jpg'
      },
      {
        id: '1',
        name: '青姐',
        message: '任务已经给你安排过了,这次不能有半点闪失，一定要按质按量的完成，我相信你的能力',
        time: '12:09'
      },{
        id: '2',
        name: '佳佳',
        message: '我待会回家了',
        time: '11:08',
        headerImg: '../../Images/header.jpg'
      },{
        id: '3',
        name: '孙玉竹',
        message: '事情太多了吧',
        time: '09:54',
        headerImg: '../../Images/header.jpg'
      },{
        id: '4',
        name: '李开祖',
        message: '怎么还没有开发完',
        time: '14:33',
        headerImg: '../../Images/header.jpg'
      }
    ]
    };
  }

  componentDidMount(){
    console.log(this.props)
  }

  _renderItem = ({item}) => (
    <View style={styles.c_messageContent}>
      <Image   
      style={styles.headerImgStyle}
      source={require('../../Images/userHeaderImg.jpg')}/>
      <View style={styles.c_leftContainer}>
        <Text style={styles.b_messageName}>{item.name}</Text>
        <Text style={styles.b_messageContent}>{item.message = item.message&&item.message.length>15?item.message.substring(0,15)+'...':item.message}</Text>
      </View>
      <View style={styles.c_timeContainer}>
        <Text>{item.time}</Text>
      </View>
    </View>
  );

  _keyExtractor = (item, index) => item.id;

  render () {
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#3C83E9"
        />
        
        <View style={styles.c_messageHeader}>
          <View style={styles.c_messageTitle}>
            <Text style={styles.b_messageTitle}>消息</Text>
            <FontAwesome
            style={styles.optionIcon}
            name={'rotate-left'}
            size={20}
            />
          </View>
          <Text>
            天青色等烟雨，欢迎回来
          </Text>
        </View>

        <View style={styles.insulateView}>
        </View>

        <View style={styles.c_messageContainer}>
          <FlatList
          data={this.state.demoData}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
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

export default connect(mapStateToProps, mapDispatchToProps)(Message)

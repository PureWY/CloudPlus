import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import { Toast } from '@ant-design/react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'
import moment from 'moment'

// Styles
import styles from './Styles/SignInStyle'
import { Colors, Metrics, Fonts } from '../../Themes';

const signDay = { selected: true, marked: true, selectedColor: '#4187EE' }
const chooseStatus = { selected: true, marked: false, selectedColor: '#2BBCE4' }

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signDay: ['2019-07-09','2019-07-10'],
      chooseDay: {},
      allSignDay: {},
      canSign: true,
      clickDay: ''
    }
  }

  componentDidMount(){
    this.alreadySign()
  }

  alreadySign(){
    let sign = {}
    for(let i of this.state.signDay){
      sign[i] = signDay
    }
    let dayString = moment().format('YYYY-MM-DD')
    chooseDay = { 
      [dayString]: chooseStatus
    }
    this.setState({
      clickDay: dayString,
      allSignDay: {
        ...sign,
        ...chooseDay
      }
    })
    console.log(sign)
  }

  handleSignIn(){
    let dayString = this.state.clickDay
    let chooseDay = {
      [dayString]: signDay
    }
    console.log(chooseDay)
    this.setState({
      canSign: false,
      allSignDay: {
        ...this.state.allSignDay,
        ...chooseDay
      }
    },()=>{
      Toast.success('签到成功')
    })
  }

  render () {

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.signHeader}>
            <CalendarList
            theme={{
              backgroundColor: '#f3f3f3',
              indicatorColor: 'blue',
              textDayFontWeight: '600',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: Fonts.size.input,
              textMonthFontSize: Fonts.size.input,
              textDayHeaderFontSize: 16
            }}
            pastScrollRange={50}
            futureScrollRange={50}
            // onDayPress={(day) => {this.addSignIn(day)}}
            horizontal={true}
            maxDate={(new Date())}
            monthFormat={'yyyy年MM月'}
            markedDates={this.state.allSignDay}
          />
          </View>
          <View style={styles.c_signFooter}>
            <View style={styles.c_signDays}>
              <Text style={styles.b_signDay}>已签到10天，云加期待每一天与你相见</Text>
            </View>
            <View style={styles.c_signBtn}>
              <View style={this.state.canSign?styles.b_signBtn:styles.b_signBtnB}>
                {this.state.canSign?<Text               
                onPress={()=>{this.handleSignIn()}}
                style={styles.b_signBtnFont}>点击签到</Text>:
                (<View style={styles.c_signSuccess}>
                  <FontAwesome5 
                  style={styles.signSuccessIcon}
                  name={'check'}
                  size={60}
                  />
                <Text               
                onPress={()=>{this.handleSignIn()}}
                style={styles.b_signBtnFontSuccess}>签到成功</Text>
                </View>)}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
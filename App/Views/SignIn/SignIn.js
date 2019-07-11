import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'
import moment from 'moment'

// Styles
import styles from './Styles/SignInStyle'
import { Colors, Metrics, Fonts } from '../../Themes';

const signDay = { selected: true, marked: true, selectedColor: '#0000FF' }
const chooseStatus = { selected: true, marked: false, selectedColor: Metrics.mainBackgroundColor }

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
              <View style={styles.b_signBtn}>
                <Text               
                onPress={()=>{this.handleSignIn()}}
                style={styles.b_signBtnFont}>{
                  this.state.canSign?'点击签到':'签到成功'
                }</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
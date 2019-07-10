import React, { Component } from 'react'
import { ScrollView, Text, Image, View, StatusBar } from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SignInStyle'

export default class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.signHeader}>
          <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
        />
          </View>
        </ScrollView>
      </View>
    )
  }
}
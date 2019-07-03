import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  b_homeImg: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight/1.1
  }
})

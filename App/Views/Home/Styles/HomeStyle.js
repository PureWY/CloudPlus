import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  c_homeContainer: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight/1.1
  },
  b_homeImg: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight/1.1,

  }
})

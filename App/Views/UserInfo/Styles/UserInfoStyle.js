import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  b_leftInfo: {
    width: Metrics.screenWidth/5,
    fontSize: Fonts.size.regular
  },
  b_rightInfo: {
    fontSize: Fonts.size.regular,
    color: Colors.black
  },
  b_editBtn: {
      fontSize: Fonts.size.h6,
      color: Colors.black
  },
  b_saveBtn: {
      fontSize: Fonts.size.h6,
      color: Metrics.mainBackgroundColor
  },
  b_formInput: {
    padding: 0,
    fontSize: Fonts.size.regular,
    color: Colors.black
  }
})

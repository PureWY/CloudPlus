import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  signHeader: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight/2,
    backgroundColor: '#f3f3f3'
  },
  c_signFooter: {
    backgroundColor: '#f3f3f3',
    alignItems: 'center'
  },
  c_signDays: {
    width: Metrics.screenWidth/1.1,
    height: 60,
    backgroundColor: Colors.snow,
    borderRadius: 10,
    marginTop: Metrics.baseMargin,
    padding: Metrics.basePadding,
    justifyContent: 'center'
  },
  b_signDay: {
    fontSize: Fonts.size.medium,
    color: Colors.black
  },
  c_signBtn: {
    width: Metrics.screenWidth/1.1,
    height: 160,
    backgroundColor: Colors.snow,
    borderRadius: 10,
    marginTop: Metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center'
  },
  b_signBtn: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Metrics.mainBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  b_signBtnFont: {
    color: Colors.snow,
    fontSize: Fonts.size.h4,
    fontWeight: '600'
  },
  b_signBtnFontGrey: {
    color: '#ccc',
    fontSize: Fonts.size.h4,
    fontWeight: '600'
  },
})

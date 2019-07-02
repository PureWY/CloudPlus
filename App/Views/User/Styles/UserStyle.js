import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerContainer: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight/5,
    backgroundColor: Metrics.mainBackgroundColor,
    justifyContent: 'center'
  },
  headerContent: {
    height: 80,
    width: Metrics.screenWidth,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerImgStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 20
  },
  headerName: {
    marginLeft: Metrics.doubleBaseMargin
  },
  userName: {
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontWeight: '500'
  },
  userSign: {
    color: Colors.snow,
    fontSize: Fonts.size.medium
  },
  b_optionFont: {
    marginLeft: Metrics.baseMargin,
    color: '#666',
    fontSize: Fonts.size.regular
  },
  c_logoutBtn: {
    padding: Metrics.basePadding
  }
})

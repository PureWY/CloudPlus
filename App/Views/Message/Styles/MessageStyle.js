import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  c_messageHeader: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight/6,
    justifyContent: 'center',
    marginLeft: Metrics.doubleBaseMargin
  },
  c_messageTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  b_messageTitle: {
    fontSize: Fonts.size.h2,
    fontWeight: '600',
    color: Colors.black,
    marginRight: Metrics.baseMargin
  },
  c_messageContainer: {
    height: Metrics.screenHeight/1.45
  },
  c_messageContent: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Metrics.basePadding,
    borderBottomColor: '#EAECED',
    borderBottomWidth: 1
  },
  headerImgStyle: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  c_leftContainer: {
    marginLeft: Metrics.baseMargin,
    width: Metrics.screenWidth/1.6
  },
  b_messageName: {
    fontSize: Fonts.size.h6,
    color: Colors.black
  },
  b_messageContent: {

  },
  c_timeContainer: {
    
  }
})

import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  launchBackground: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  loginHeader: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight/3.5,
    backgroundColor: Metrics.mainBackgroundColor
  },
  loginContainer: {
    marginTop: Metrics.marginTopCenter,
    alignItems: 'center'
  },
  loginType: {
    width: Metrics.screenWidth/1.5,
    height: 50,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  loginBox: {
    width: Metrics.screenWidth/1.3,
    height: Metrics.screenHeight/2,
    backgroundColor: Colors.snow,
    borderRadius: Metrics.borderRadius,
    elevation: 20,
    padding: Metrics.doubleBasePadding,
    paddingTop: 40
  },
  inputStyle: {
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    paddingLeft: 10
  },
  forgetPassword: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20
  },
  passwordStyle: {
    color: Metrics.mainBackgroundColor
  },
  loginBtn: {
    borderRadius: 50
  },
  registerBtn: {
    borderRadius: 50,
    borderColor: Metrics.mainBackgroundColor
  },
  othersLogin: {
    paddingTop: 30
  },
  othersFont: {
    fontSize: 17,
    textAlign: 'center'
  },
  othersIcon: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconStyle: {
    marginRight: 10,
    marginLeft: 10
  }
})

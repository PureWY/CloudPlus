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
    width: Metrics.screenWidth/1.2,
    height: Metrics.screenHeight/2,
    backgroundColor: Colors.snow,
    borderRadius: Metrics.borderRadius,
    elevation: 20,
    padding: Metrics.doubleBasePadding,
    paddingTop: 40
  },
  registerBox: {
    width: Metrics.screenWidth/1.2,
    height: Metrics.screenHeight/1.8,
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
    paddingLeft: 10,
  },
  inputContainer: {
    width: Metrics.screenWidth/2
  },
  codeContainer: {

  },
  codeBtn: {
    width: 90,
    height: 43,
    borderRadius: 50,
    backgroundColor: '#00DD00',
    borderColor: '#00DD00',
    marginLeft: -10
  },
  codeFont: {
    color: Colors.snow
  },
  codeBox: {
    flexDirection: 'row'
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
    paddingTop: 20
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
  },
  formIconStyle: {
    color: '#438DEF'
  },
  formIconStylePlus: {
    color: '#438DEF',
    marginLeft: -5
  },
  formIconStyleRe: {
    color: '#438DEF',
    marginLeft: -2
  }
})

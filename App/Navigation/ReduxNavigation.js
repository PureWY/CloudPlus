import * as React from 'react'
import { BackHandler, Platform, ToastAndroid } from 'react-native'
import { 
    createReactNavigationReduxMiddleware,
    createReduxContainer
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

const ReduxAppNavigator = createReduxContainer(AppNavigation)

class ReduxNavigation extends React.Component {
    lastBackPressed = 0;
  
    componentDidMount () {
      if (Platform.OS === 'ios') return
      BackHandler.addEventListener('hardwareBackPress', () => {
        const { dispatch, nav } = this.props
  
        if (nav.routes.length === 2 && nav.routes[1].routes[0].routeName === 'Home') {
          if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            dispatch({ type: 'Navigation/BACK' })
            BackHandler.exitApp();
            return false;
          }
  
          this.lastBackPressed = Date.now();
          ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
          return true;
        }
  
        // change to whatever is your first screen, otherwise unpredictable results may occur
        if (nav.routes.length === 1 && (nav.routes[0].routeName === 'Login')) {
            console.log('当前是登录页，不返回')
            return false
        }

        dispatch({ type: 'Navigation/BACK' })
        return true
      })
    }
  
    componentWillUnmount () {
      if (Platform.OS === 'ios') return
      BackHandler.removeEventListener('hardwareBackPress', undefined)
    }
  
    render () {
      return <ReduxAppNavigator dispatch={this.props.dispatch} state={this.props.nav} />
    }
  }

const mapStateToProps = state => ({
    nav: state.nav
})

export default connect(mapStateToProps)(ReduxNavigation)
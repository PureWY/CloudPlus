import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from '../Views/Login/Login'
import Home from '../Views/Home/Home'

import styles from './Styles/NavigationStyles'

const PrimaryNav = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    }
},{
    headerMode: 'none',
    initialRouteName: 'Login',
    navigationOptions: {
        headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)
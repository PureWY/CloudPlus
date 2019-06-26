import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Login from '../Views/Login/Login';
import Home from '../Views/Home/Home';
import User from '../Views/User/User';
import Message from '../Views/Message/Message';

import styles from './Styles/NavigationStyles';

const TabNav = createBottomTabNavigator({
    Home: {
      screen: Home
    },
    Message: {
      screen: Message
    },
    User: {
      screen: User
    }
}, {
    swipeEnabled: true,
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let FontAwesomeComponent = FontAwesome5;
            let iconName;
            if (routeName === 'Home') {
                iconName = `home`;
            } else if (routeName === 'Message') {
                iconName = `comment-dots`;
            }else if(routeName === 'User') {
                iconName = `user`
            }

            return <FontAwesomeComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
    },
})

const PrimaryNav = createStackNavigator({
    TabBar: {
        screen: TabNav
    },
    Login: {
        screen: Login
    }
},{
    headerMode: 'none',
    initialRouteName: 'Login',
    navigationOptions: {
        headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)
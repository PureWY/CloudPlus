import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Login from '../Views/Login/Login';
import Home from '../Views/Home/Home';
import User from '../Views/User/User';
import Message from '../Views/Message/Message';

import styles from './Styles/NavigationStyles';

const TabNav = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '首页'
        }
    },
    Message: {
        screen: Message,
        navigationOptions: {
            tabBarLabel: '消息'
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: '我的'
        }
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
        activeTintColor: '#438DEF',
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 13
        }
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
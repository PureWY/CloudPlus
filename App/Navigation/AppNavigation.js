import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AuthLoading from '../Views/AuthLoading/AuthLoading'
import Login from '../Views/Login/Login';
import Home from '../Views/Home/Home';
import User from '../Views/User/User';
import Message from '../Views/Message/Message';
import Setting from '../Views/Setting/Setting'
import UserInfo from '../Views/UserInfo/UserInfo';
import SignIn from '../Views/SignIn/SignIn'

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
    AuthLoading: {
        screen: AuthLoading,
        navigationOptions: {
            header: null
        }
    },
    TabBar: {
        screen: TabNav,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            title: '设置'
        }
    },
    UserInfo: {
        screen: UserInfo,
        navigationOptions: {
            title: '基本信息'
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: '每日签到'
        }
    }
},{
    initialRouteName: 'AuthLoading',
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle: {
            backgroundColor: '#fff',
        },
    },
    navigationOptions: {
        headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)
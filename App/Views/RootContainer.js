import React, { Component } from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import styles from './Styles/RootContainerStyles'


export default class RootContainer extends Component {
    render() {
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle='light-content'></StatusBar>
                <ReduxNavigation />
            </View>
        )
    }
}
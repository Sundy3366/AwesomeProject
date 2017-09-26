/**
 * Created by wangchenxi on 2017/7/21.
 */
/**
 * Created by wangchenxi on 2017/7/21.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native';

class AwesomeProject extends Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>红色哦</Text>
                <Text style={styles.yellow}>蓝色哦</Text>
                <Text style={[styles.yellow,styles.red]}>红色哦</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    red: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30
    },
    yellow: {
        color: 'blue'
    }
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

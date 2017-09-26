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
class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }
    render() {
        let display = this.state.showText ? this.props.text : '逗你玩';
        return (
            <Text>{display}</Text>
        )
    }
}

class AwesomeProject extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

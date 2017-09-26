/**
 * Created by wangchenxi on 2017/8/8.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * ViewPagerAndroid 组件（常见引导页面）
 */
'use strict';

import React ,{Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    ViewPagerAndroid,
    StyleSheet
} from 'react-native';

class hello extends Component {
    render (){
        return (
            <ViewPagerAndroid intialPage={0} style={styles.flex}>
                <View><Text>111</Text></View>
                <View><Text>222</Text></View>
                <View><Text>333</Text></View>
            </ViewPagerAndroid>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex : 1
    }
})
AppRegistry.registerComponent('AwesomeProject',()=>hello)
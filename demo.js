/**
 * Created by wangchenxi on 2017/8/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    PixelRatio
} from 'react-native';

class hello extends Component {
    render (){
        return (
            <View></View>
        )
    }
}
const  styles= StyleSheet.create({

})
AppRegistry.registerComponent('AwesomeProject',()=>hello)
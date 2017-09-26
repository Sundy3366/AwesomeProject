/**
 * Created by wangchenxi on 2017/8/8.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 抽屉组件（最常见的功能就是能从左右划出的菜单）
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    //PixelRatio,
    Text,
    Alert,
    //Image,
    //TouchableOpacity,
    DrawerLayoutAndroid,
    //ProgressBarAndroid,
    View
} from 'react-native';

class DongFang1 extends Component {
    haha(){
        console.info("关闭抽屉调用此函数")
        //Alert.alert('提示','来自后台数据：jaja',[{text: '确定', onPress: () => console.log('OK Pressed!')},]);
    }
    aa(){
        console.info("开启抽屉调用此函数")
    }
    bb(){
        console.info("抽屉交互调用此函数")
    }
    cc (){
        Alert.alert('提示','抽屉里的操作')
    }
    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#ff0'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}  onPress= {this.cc}>我是抽屉!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={150}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}
                onDrawerClose = {this.haha}
                onDrawerOpen = {this.aa}
                onDrawerSlide = {this.bb}
                >

                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>React Native World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => DongFang1);

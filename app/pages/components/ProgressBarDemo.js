/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: ProgressBarAndroid--进度条 适用于android
 */
import React , { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ProgressBarAndroid
} from 'react-native';
/*
* React Native ProgressBar组件
* 分平台的:ProgressBarAndroid  ProgressViewIos
* styleAttr:进度条的样式 Horizontal(水平) Small Large Inverse SmallInverse LargeInverse()
* progress :当前的进度值(在0到1之间)
* */
class ProgressBarDemo extends Component{
    render(){
        return(
            <View style={{flex:1,marginTop:45}}>
                <ProgressBarAndroid color='red' styleAttr='Inverse'/>
                <ProgressBarAndroid color='purple' styleAttr='Horizontal' progress={0.8} indeterminate={false} style={{marginTop:10}} />
                <ProgressBarAndroid color='green' styleAttr='Horizontal' indeterminate={true} style={{marginTop:10}}/>

                <ProgressBarAndroid color='black' styleAttr='SmallInverse' style={{marginTop:10}} />
                <ProgressBarAndroid color='black' styleAttr='Large' style={{marginTop:10}} />
            </View>
        )
    }
}

export default ProgressBarDemo;
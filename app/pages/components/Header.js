/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 公用头部组件--仿网易新闻
 */
import React , { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    PixelRatio,
} from 'react-native';

class Header extends Component{
    render(){
        return(
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度"</Text>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        // flex:1,
        marginTop:25,
        height:50,
        borderBottomWidth:5/PixelRatio.get(),
        borderBottomColor:'#ef2d36',
        alignItems:'center',
    },
    font:{
        fontWeight:'bold',
        fontSize:25,
        textAlign:'center'
    },
    font_1:{
        color:'#cd1d1c'
    },
    font_2:{
        color:'#fff',
        backgroundColor:'#cd1d1c'
    },
})

export default Header;
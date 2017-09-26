/**
 * Created by wangchenxi on 2017/8/9.
 */
'use strict';
import React,{ Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    TextInput,
    StyleSheet,
    ViewPagerAndroid,
    DrawerLayoutAndroid
} from 'react-native';


class hello extends Component{
    render(){
        return (
            <View style={{backgroundColor:'#f4f4f4',flex:1}}>
                <View>
                    <TextInput
                        placeholder='QQ号/手机号/邮箱'
                        autoFocus = {true}
                        style={styles.style_user_input}
                        numberOfLines={1}
                        underlineColorAndroid='transparent'
                        textAlign='center'
                        />
                    <View
                        style={{height:1,backgroundColor:'#f4f4f4'}}
                        />
                    <TextInput
                        placeholder='密码'
                        secureTextEntry = {true}
                        style={styles.style_pwd_input}
                        numberOfLines={1}
                        underlineColorAndroid='transparent'
                        textAlign='center'
                        />
                </View>
                <View style={styles.style_view_commit}>
                    <Text style={{color:'#fff',textAlign:'center'}}>登录</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
                    <Text style={styles.style_view_unlogin}>无法登录?</Text>
                    <Text style={styles.style_view_register}>新用户</Text>
                </View>
            </View>
        )

    }
}


const styles = StyleSheet.create({
    style_user_input : {
        backgroundColor:'#fff',
        marginTop: 10,
        height:45
    },
    style_pwd_input : {
        backgroundColor:'#fff',
        height:45
    },
    style_view_commit:{
        backgroundColor:'#63B8FF',
        height:38,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        justifyContent: 'center',
    },
    style_view_unlogin:{
        fontSize:12,
        color:'#63B8FF',
        marginLeft:10,
    },
    style_view_register:{
        fontSize:12,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right',
    }
});
AppRegistry.registerComponent('AwesomeProject',()=>hello)
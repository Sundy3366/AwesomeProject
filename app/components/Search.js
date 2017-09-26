import React , { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';

/*
* TextInput ---文本输入框 自动补全的搜索功能
*主要属性和事件如下:
* autoCapitalize:枚举类型,可选值有none sentences words character 但用户输入时,用于提示
* placeholder:占位符,在输入前显示的文本内容
* value:文本输入框的默认值
* placeholderTextColor:占位符文本的颜色
* password:boolean类型 true表示密码输入显示*
* multiline:多行输入
* editable:文本框是否可输入
* autoFocus:自动聚焦
* clearButtonMode:枚举类型,never while-efiting unless-editing always 用于显示清楚按钮
* maxLength:能够输入的最长字符数
* enablesRerurnKeyAutomatically:如果为true 表示没有文本时键盘是不能有返回键的,其默认值为false
* returnKeyType:枚举类型 default go google join next route search send yohoo done emergency-call 表示软键盘返回键显示的字符串
* secureTextEntry:隐藏输入内容,默认值为false
* onChangeText:当文本输入框的内容变化时,调用该函数,onChangeText接收一个文本的参数对象
* onChange:当文本变化时,调用该函数
*
*
* */

class SearchBox extends Component{
    render(){
        return(
            <View style={[styles.flex,styles.topstatus]}>
                <Search></Search>
            </View>
        )
    }
}

class Search extends Component{
    render(){
        return(
            <View style={[styles.flex,styles.flexDirection]}>
                <View style={[styles.flex,styles.input]}>
                    <TextInput
                        returnKeyType="search"
                        placeholder="Type here to translate111"
                        password="true"
                    ></TextInput>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.search}>搜索</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    flexDirection:{
        flexDirection:'row'
    },
    topstatus:{
        marginTop:25
    },
    input:{
        height:45,
        borderColor:'red',
        borderWidth:1,
        marginLeft:10,
        borderRadius:5
    },
    btn:{
        // backgroundColor:'skyblue'
        width:45,
        marginLeft:1,
        marginRight:5,
        backgroundColor:'#23beff',
        height:45,
        justifyContent:'center',
        alignItems:'center'
    },
    search:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    }
})

export default SearchBox;
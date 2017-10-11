/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: WebView组件
 */

import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView,
    Dimensions
} from 'react-native';

// const Width = Dimensions.get('window').width;
// const Height = Dimensions.get('window').height;

/*
*
* automaticallyAdjustContentInsets:是否自动调整内部内容
* bounces(IOS):回弹效果 如果为false,则内容拉到底部或者不回弹,默认为true
* domStorageEnabled(Android):仅限Android 平台.指定是否开启DOM本地存储
* javaScriptEnable:仅限Android平台.IOS平台javaScript 是默认开启的
* contentInset:内部内容偏移值,该值为一个JavaScript对象{top:number,left:number,bottom:number,right:number}
* source:{{uri:'网站'}}在WebView中载入一段静态的html代码或者是一个url(还可以附带一些header选项) {{html:'html代码块}}
* injectedJavascript:注入的js代码,其值是字符串,如果加上了该属性,就会在webView里面执行js代码(在网页加载之前注入)
* mediaPlaybackRequiresUserAction:设置页面中HTML5音视频是否需要在用户点击后在开始播放,默认值为false
* onNavigationStateChange:监听导航状态变化的函数(当发现浏览器地址改变时,触发事件)
* renderError:监听渲染页面出错的函数
* startInLoadingState:是否开启页面加载的状态
* renderLoading:webview组件正在渲染页面时触发的函数,需要同startInLoadingState一起使用,当startInLoadingState为true时该函数才起作用
* scrollEnabled(IOS):表示webview里面页面是否能滚动,如果其值为true则可以滚动,否则禁止滚动
* scalesPageToFix:按照页面比例和内容宽高比例自动缩放内容
* onError function 加载失败时调用
* onLoad function 加载成功时调用
* onLoadEnd function 加载结束时(无论成功或失败)调用
* onLoadStart function 加载开始时调用
*
* */

const {width} = Dimensions.get('window').width;
const {height} = Dimensions.get('window').height;

class WebViewDemo extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render(){
        return(
            <View style={styles.container}>
                <WebView
                    style={{height:height, width:width}}
                    source={{uri:'https://m.runoob.com/'}}
                    injectedJavaScript={"alert('今天是星期五')"}
                        // source={{html:'<div><img src="http://www.baidu.com/img/bd_logo1.png"/></div>'}}
                ></WebView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },

})

export default WebViewDemo;
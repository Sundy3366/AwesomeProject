/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: touchable按钮组件
 */
import React,{ Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    PixelRatio,
    StyleSheet
} from 'react-native';

var onePT=1/PixelRatio.get();

/*
* React Native 没有像web开发那样给元素绑定click事件,前面讲的Text组件有onPress 事件回调,View组件是没有的,
* 但是在实际项目开发总,很多其他的组件也是需要可以点击的,RN提供了3个组件来赋予被点击的能力(去包裹其他组件即可),
* 这三个组件被称为"Touchable类组件"
* 1.TouchableHighlight 高亮
* 属性:activeOpacity(设置透明度),onHideUnderlay,onShowUnderlay,underlayColor(点击时背景阴影效果的背景颜色)
*2.TouchableOpacity 透明度
* 属性:activeOpacity
* 3.TouchableWithoutFeedback 无反馈 不会出现任何视觉变化,
* 不建议使用;属性:onLongPress,onPressIn,onPressOut
* 在app中,我们希望点击的时候会有一些视觉上的变化,这个变化会提醒我们已经点击过了,从而避免重复点击
* */


class TouchableDemo extends Component{
    show(txt){
        alert(txt)
    }
    render(){
        return(
            <View style={styles.flex}>
                <TouchableHighlight onPress={this.show.bind(this,'不忘初心')} underlayColor='#e1f6ff'>
                    <Text style={styles.item}>不忘初心@!</Text>
                </TouchableHighlight>
                <TouchableOpacity onPress={this.show.bind(this,'作者sundy')}>
                    <Text style={styles.item}>作者:Sundy 5112</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={this.show.bind(this,'说点什么')}>
                    <Text style={styles.item}>说点什么 5112</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item:{
        height:50,
        backgroundColor:'skyblue',
        margin:10
    },
    flex:{
        flex:1
    }

})

export default TouchableDemo;
/**
 * Created by wangchenxi on 2017/7/25.
 */
/**
 * Created by wangchenxi on 2017/7/25.
 */
import React, { Component } from 'react';
import {
    Animated,
    AppRegistry,
    Text,
} from 'react-native';

export default class FadeInView  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
        };
    }
    componentDidMount() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnim,                      // 动画中的变量值
            {
                toValue: 1,                             // 透明度最终变为1，即完全不透明
            }
        ).start();                                  // 开始执行动画
    }
    render() {
        return (
            <Animated.View                            // 可动画化的视图组件
                style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
        }}
                >
                {this.props.children}
            </Animated.View>
        );
    }
}
class AwesomeProject extends Component {
    render() {
        return (
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
            </FadeInView>
        )
    }
}

AppRegistry.registerComponent('AwesomeProject',()=>AwesomeProject)
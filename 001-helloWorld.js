/**
 * Created by wangchenxi on 2017/7/24.
 */
import React,{ Component } from 'react';
import { AppRegistry, Text } from 'react-native';
class AwesomeProject extends Component {
    render(){
        return (
            <Text>Hello world!</Text>
        )
    }
}
AppRegistry.registerComponent('AwesomeProject',()=>AwesomeProject);
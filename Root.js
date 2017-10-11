/**
 * Created by wangchenxi on 2017/9/22.
 */
import React ,{ Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    BackAndroid,
    Platform
} from 'react-native'
import App from './app/App';

class Test extends Component {
    render(){
        return (
            <View style={{flex:1}}>

                <App></App>
            </View>
        )
    }

}
AppRegistry.registerComponent('AwesomeProject',()=>Test)
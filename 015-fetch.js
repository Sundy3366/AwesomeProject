/**
 * Created by wangchenxi on 2017/8/7.
 */
/**
 * Created by wangchenxi on 2017/7/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    Alert,
    View
} from 'react-native';

class AwesomeProject extends Component {
//发送Ajax请求
    sendAjax(){
        //POST方式
        fetch("http://192.168.10.81:3001/aaa", {
            method: "get",
            mode: "cors",
            //headers: {
            //    "Content-Type": "application/x-www-form-urlencoded"
            //}
            //body: 'key=1'
        }).then(function (res) {
            console.log("fetch request ", JSON.stringify(res.ok));
            if(res.ok){
                res.json().then(function (json) {
                    //console.info(json);
                    Alert.alert('提示','来自后台数据：名字'+json.name+'、年龄'+json.age,[{text: '确定', onPress: () => console.log('OK Pressed!')},]);
                });
            }else{
                Alert.alert('提示','请求失败',[{text: '确定', onPress: () => console.log('OK Pressed!')},]);
            }

        }).catch(function (e) {
            console.log("fetch fail");
            Alert.alert('提示','系统错误',[{text: '确定', onPress: () => console.log('OK Pressed!')},]);
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.wrapper}
                                    onPress={this.sendAjax}>
                    <View style={styles.button}>
                        <Text>点击发送Ajax请求</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
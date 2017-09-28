/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: FlatList组件
 */

import React ,{ Component } from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    Text
} from  'react-native';

/*列表的一个常用场景就是从服务器端取回列表数据然后显示
* 完全跨平台。
* 支持水平布局模式。
* 行组件显示或隐藏时可配置回调事件。
* 支持单独的头部组件。
* 支持单独的尾部组件。
* 支持自定义行间分隔线。
* 支持下拉刷新。
* 支持上拉加载。
支持跳转到指定行（ScrollToIndex）。
* */
class FlatListDemo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={[
                    {key:'Devin'},
                    {key:'Jackson'},
                    {key:'James'},
                    {key:'Joel'},
                    {key:'John'},
                    {key:'Jillian'},
                    {key:'Jimmy'},
                    {key:'Julie'},
                    {key:'Lucy'},
                ]}
                renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    item:{
        padding:10,
        fontSize:18,
        height:105
    }
})

export default FlatListDemo;
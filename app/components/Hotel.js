/*
* 实例步骤
* 1.加载View组件
* 2.创建组件
* 3.添加样式表
* 4.注册入口
* 5.外层布局
* 6.flexbox水平三栏
* 7.上下两栏布局
* 8.完善效果
* */
import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    PixelRatio
} from 'react-native';

class Hotel extends Component{
    render(){
        return(
            <View style={BoxStyles.container}>
                {/*<view style={BoxStyles.box}>*/}
                    <View style={BoxStyles.height100}>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>酒店</Text>
                    </View>
                    <View style={[BoxStyles.height100,BoxStyles.lineLeftRight]}>
                        <View style={[BoxStyles.height50,BoxStyles.lineBottom]}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>海外酒店</Text>
                        </View>
                        <View style={BoxStyles.height50}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>特惠酒店</Text>
                        </View>
                    </View>
                    <View style={BoxStyles.height100}>
                        <View style={[BoxStyles.height50,BoxStyles.lineBottom]}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>团购</Text>
                        </View>
                        <View style={BoxStyles.height50}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>客栈公寓</Text>
                        </View>
                    </View>
                {/*</view>*/}

            </View>
        )
    }
}

const BoxStyles = StyleSheet.create({
    container:{
        flex:1,
        // borderWidth:1,
        // borderColor:'red',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderRadius:10,
        margin:5,
    },
    lineLeftRight:{
        borderRightWidth:1/PixelRatio.get(),
        borderLeftWidth:1/PixelRatio.get(),
        borderColor:'#fff'
    },
    lineBottom:{
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#fff'
    },
    height100:{
        flex:1,
        height:100,
        // width:100,
        // borderWidth:1,
        // borderRadius:5,
        // borderColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#FF165E",
        // marginRight:1,

    },
    height50:{
        flex:1,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    // bottomLine:{
    //     borderBottomColor:"#fff",
    //     // borderBottomWidth:1,
    // }
})
export default Hotel;
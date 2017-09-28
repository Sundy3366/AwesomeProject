import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';


/*
* swiper 属性
* 基本属性
* horizontal:水平  默认为true bool ===>horizontal={false} 如果值为true时，那么滚动的内容将是横向排列的，而不是垂直于列中的
* pagingEnabled   默认为true
* loop            默认为true   type:bool 如果默认为false,那么滑动到最后一张时,再次滑动将不会展示第一张图片
* index           默认为0      type:number     初始进入的页面标识为0的页面
* showsButtons    默认为false  type:bool 如果设置为true,那么就可以使控制按钮(即:左右两侧的箭头)可见
* autoplay        默认为false  type:bool 设置为true,则页面可以自动跳转
* */

class SwiperDemo extends Component{
    render(){
        return(
            <Swiper style={styles.wrapper}
                    horizontal={true}
                    pagingEnabled={true}
                    loop={false}
                    showsHorizontalScrollIndicator = {true}
                    showsButtons={true}
                    autoplay={true}
            >
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello,Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        )
    }
}

const styles=StyleSheet.create({
    wrapper:{

    },
    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow'
    },
    slide2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    slide3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    text:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold'
    }
})

export default SwiperDemo;
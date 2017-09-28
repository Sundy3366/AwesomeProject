/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: react-native-swiper——第三方库轮播插件--基本
 */
import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
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

const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{ color: 'grey' }}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}

//父组件
class SwiperDemo extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            items:[]
        };
      }

    componentDidMount() {
        this.setState({
            items:[
                {title: 'Hello Swiper',css:styles.slide1},
                {title: 'Beautiful',css:styles.slide2},
                {title: 'And example',css:styles.slide3}
            ]
        })
    }
    render(){
        return(
            <Swiper style={styles.wrapper}
                    horizontal={false}
                    pagingEnabled={true}
                    loop={false}
                    showsHorizontalScrollIndicator = {true}
                    showsButtons={true}
                    autoplay={true}
                    renderPagination={renderPagination}
                    dot={<View style={{           //未选中的圆点样式
                        backgroundColor: 'rgba(0,0,0,.2)',
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 9,
                        marginTop: 9,
                        marginBottom: 9,
                    }}/>}
                    activeDot={<View style={{    //选中的圆点样式
                        backgroundColor: '#007aff',
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight: 9,
                        marginTop: 9,
                        marginBottom: 9,
                    }}/>}
            >
                <View style={styles.slide}>
                    <Image
                        // style={{width:200,height:300}}
                        resizeMode="stretch"
                        source={require('../../resource/img/pic11.jpg')}/>
                    <Text style={styles.text}>Hello,Swiper</Text>
                </View>
                <View style={styles.slide}>
                    <Image
                        // style={{width:200,height:300}}
                        resizeMode="stretch"
                        source={require('../../resource/img/pic22.jpg')}/>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide}>
                    <Image
                        // style={{width:200,height:300}}
                        resizeMode="stretch"
                        source={require('../../resource/img/pic33.jpg')}/>
                    <Text style={styles.text}>And simple</Text>
                </View>

            </Swiper>
        )
    }
}

const styles=StyleSheet.create({
    wrapper:{
        backgroundColor:'yellow'
    },
    slide:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    text:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold'
    }
})

export default SwiperDemo;
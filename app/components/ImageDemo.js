import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    PixelRatio,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
/*
* React Native 的Image组件调用的图片路径比较多:网络图片,本地图片,照相机图片
*
* Image组件的属性:
* resizeMode:图片适用的模式 cover,contain,stretch
* source :图片的引用地址
* 网络图片:source={{uri:'http://....png}}
* 本地图片: source={require('./baidulogo.png')}
* ****静态图片资源:注意:如果你添加图片的时候packager正在运行,需要你重启package以便能正确引入新添加的图片
*
* 这样会带来一些好处
* ios和Andtoid 一致的文件系统
* 图片和js代码处在相同的文件夹,这样组件就可以包含自己所用的图片而不用单独去设置
* 不需要全局命名,你不用在担心图片名字的冲突问题了
* 只有实际被用到(即被require)的图片才会被打包到你的app
* 现在在开发期间,增加和修改图片不需要重新编译了,只要和修改js代码一样刷新你的模拟器就可以了
* 与访问网络图片相比,Packager可以得知图片大小了,不需要在代码里再声明一遍尺寸
* 现在通过npm来分发组件或库可以包含图片了
* 注意:为了使新的图片资源机制正常工作,require中的图片名字必须是一个静态字符
*# 使用混合App的图片资源
* 如果你在编写一个混合App(一部分ui使用React Native,而另一部分使用平台原声代码),也可以使用已经打包到App中的图片资源(通过Xcode的asset类目或者Android的drawable文件夹打包)
* <Image source={{uri:'app_icon' style={{width:40,height:40}}/>
* 注意:这一做法并没有任何安全检查,你需要自己确保图片在应用中确实存在,而且还需要指定尺寸
*
* 注意:网络图片,你需要自己手动指定图片的尺寸
*
* 关于图片的尺寸,React Native会自动为你选好.如果没有,则会选择最接近的尺寸进行缩放,但也至少缩放到比例所需尺寸大出50%,以使图片看起来仍然足够清晰.这一过程都是自动完成的
* */
var imgs=[
    'https://www.baidu.com/img/bd_logo1.png',
    'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/xiaoman2016_24.png',
    'http://www.runoob.com/wp-content/themes/runoob/assets/img/runoob-logo.png'
]
class ImageDemo extends Component{
    render(){
        return(
            <View style={[styles.flex,{marginTop:45}]}>
                <MyImage imgs={imgs}/>
            </View>
        )
    }
}


class MyImage extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            count:0,
            imgs:this.props.imgs
        };
      }
      goPreview(){
        var count=this.state.count;
        count--;
        if(count>=0){
            this.setState({count:count})
        }
      }
      goNext(){
          var count=this.state.count;
          count++;
          if(count<this.state.imgs.length){
              this.setState({count:count})
          }
      }
    render(){
        return(
            <View style={[styles.flex,{alignItems:'center'}]}>
                <View style={styles.imgStyle}>
                    <Image style={styles.img}
                        resizeMode="contain"
                           // source={{uri:this.state.imgs[this.state.count]}}
                           source={{uri:this.state.imgs[this.state.count]}}
                    />
                </View>
                <View style={[styles.btns]}>
                    <TouchableOpacity onPress={this.goPreview.bind(this)}><View style={styles.btn}><Text>上一张</Text></View></TouchableOpacity>
                    <TouchableOpacity onPress={this.goNext.bind(this)}><View style={styles.btn}><Text>下一张</Text></View></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    imgStyle:{
        width:300,
        height:150,
        borderWidth:1,
        borderColor:'#999',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    img:{
        height:100,
        width:150,
    },
    btn:{
        width:60,
        height:30,
        borderColor:'#0089ff',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:20
    },
    btns:{
        flexDirection:'row' ,
        marginTop:20,
        justifyContent:'center'
    }
})

export default ImageDemo;
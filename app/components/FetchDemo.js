/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    // ProgressBarAndroid,
    ActivityIndicator,
    Image,
    ScrollView
} from 'react-native';


/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 */
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class FetchDemo extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            movies:null
        };
      }
    _handlePress(data){
        alert(data.title)
    }
    render(){
          //如果movies==null的情况 初始情况 渲染加载视图
        if(!this.state.movies){
            return this.renderLoadingView();
        }

        var movie = this.state.movies;
        return this.renderMovie(movie)
    }
    //请求前的加载中状态
    renderLoadingView(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <Text>加载中</Text>
            </View>
        )
    }

    //渲染电影信息的过程
    renderMovie(movie){
        var news = [];
        for (var i in movie){
            // console.log(movie[i])
            var text = (
                <View key={i} style={styles.flexDirection}>
                    <Image source={{uri:movie[i].posters.thumbnail}}
                           style={styles.thumbnail}
                    />
                    <TouchableOpacity  dataa={movie[i].title}
                                       // onPress = {this._handlePress.bind(this,this.props.news[i])}
                                       onPress={this._handlePress.bind(this,movie[i])}>
                        <View style={[styles.introduction,styles.flex]}>
                            <Text>title:{movie[i].title}</Text>
                            <Text>id:{movie[i].id}</Text>
                            <Text>runtime:{movie[i].runtime}</Text>
                        </View>
                    </TouchableOpacity>



                </View>

            );
            news.push(text)
            console.log(news)
        }
        return(
            <View>
                {/*<Image/>*/}
                <ScrollView>
                    {news}
                </ScrollView>
            </View>
        )
    }
    //挂载完成发起请求数据
    componentDidMount(){
        this.fetchDate()
    }
    fetchDate(){
        fetch(REQUEST_URL)
            .then((rps)=>rps.json())
            .then((data)=>{
            this.setState({
                movies:data.movies
            })
            })
            .done()
        //调用done()----这样可以抛出异常而不是简单的忽略
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff'
    }
    ,
    thumbnail: {
        width: 53,
        height: 81,

    },
    flexDirection:{
        flexDirection:'row',
        marginBottom:10,
        borderWidth:1,
        borderColor:'red'
    },
    flex:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        // alignItems:'center',

    },
    introduction:{
        marginLeft:20,
    }
})


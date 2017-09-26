import React ,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Header from './Header';

class News extends Component{
    render(){
        return(
            <View>
                <Header/>
                <List title="不忘初心,方得始终"></List>
                <List title="舍得舍得,终究是舍得"></List>
                <List title="心有猛虎细嗅蔷薇"></List>
                <List title="曾将沧海难为水,除却巫山不是云"></List>

                <ImpotantNews
                    news={['解放军报社大楼正在拆除 标识已被卸下(图)解放军报社大楼正在拆除 标识已被卸下(图)解放军报社大楼正在拆除 标识已被卸下(图)',
                        '韩国签停东三省52加旅行社 或为阻止潮旅游创汇解放军报社大楼正在拆除 标识已被卸下(图)解放军报社大楼正在拆除 标识已被卸下(图)',
                        '南京大学生发起亲吻陌生人活动 有女生献初吻-南京大学生发起亲吻陌生人活动,有女生献初吻南京大学生发起亲吻陌生人活动 有女生献初吻-南京大学生发起亲吻陌生人活动,有女生献初吻南京大学生发起亲吻陌生人活动 有女生献初吻-南京大学生发起亲吻陌生人活动,有女生献初吻',
                        '防总部署长江防汛,以防御98年最大级别洪水为目标解放军报社大楼正在拆除 标识已被卸下(图)解放军报社大楼正在拆除 标识已被卸下(图)',
                    ]}>
                </ImpotantNews>
            </View>


        )
    }
}

class List extends Component{
    render(){
        return(
            <View style={styles.list_item}>
                <Text style={styles.list_item_font}>{this.props.title}</Text>
            </View>
        )
    }
}

 class ImpotantNews extends Component{

     show(title){
         alert(title);
     }

    render(){
        var news = [];
        for (var i in this.props.news){
            var text = (
                <Text
                    key={i}
                    onPress = {this.show.bind(this,this.props.news[i])}
                    numberOfLines={1}
                        style={styles.news_item}

                >{this.props.news[i]}</Text>
            );
            news.push(text)
        }
        return(
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>

                {news}
            </View>
        )
    }
 }
const styles = StyleSheet.create({
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center'
    },
    list_item_font:{
        fontSize:16
    },
    news_title:{
        fontWeight:'bold',
        fontSize:20,
        // textAlign:'center',
        color:'#cd1d1c',
        marginLeft:10,
        marginTop:15
    },
    news_item:{
        fontSize:16,
        // fontWeight:'bold',
        // color:'#ddd',
        marginLeft:10,
        marginTop:15,
        lineHeight: 25,

    }
})

export default News;
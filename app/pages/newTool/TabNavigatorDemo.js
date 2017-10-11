/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: react-native-tab-navigator——第三方库tab导航插件--基本
 */
import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import ListViewPage from '../components/ListViewPage';
import ScrollView from  '../components/ScrollDemo';
import SideMenu from './SideMenuDemo';
const uri_image_menu = 'http://image18-c.poco.cn/mypoco/myphoto/20160605/09/17351665220160605093956066.png';

class TabNavigatorDemo extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态 默认选中显示页面为home页面
        this.state = {
            selectedTab:'home',
        };
      }

    render(){
          //定义home页面
        var homeView = (
            <SideMenu/>
        )
        //定义个人中心页面
        var personalView = (
            <View style={[styles.flex,{backgroundColor:'lightpink'}]}>
                {/*<Text style={{fontSize:22}}>我是个人中心</Text>*/}
                <ScrollView/>
            </View>
        )

        let tabBarHeight = 60;
        return(

            <TabNavigator
                tabBarStyle={{ height: tabBarHeight, overflow: 'hidden' }}
                sceneStyle={{ paddingBottom: tabBarHeight }}
            >

                <TabNavigator.Item
                    //设置选中的位置
                    selected = {this.state.selectedTab === 'home'}
                    //标题
                    title="主页"
                    //标题样式
                    titleStyle={styles.tabText}
                    //选中时标题文字样式
                    selectedTitleStyle={styles.selectedTabText}
                    //图标
                    renderIcon = {()=><Image style={styles.img} source={require('../../../img/h5.png')}/>}
                    //选中时图标
                    renderSelectedIcon = {()=><Image style={styles.img} source={require('../../../img/h4.png')}/>}
                    //
                    badgeText = '9+'
                    //点击事件
                    onPress={()=> this.setState({selectedTab:'home'})}
                >
                    {homeView}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected = {this.state.selectedTab === 'personal'}
                    title="个人中心"
                    //标题样式
                    titleStyle={styles.tabText}
                    //选中时标题文字样式
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon = {()=><Image style={styles.img} source={require('../../../img/s1.png')}/>}
                    renderSelectedIcon = {()=><Image style={styles.img} source={require('../../../img/s7.png')}/>}
                    renderBadge = {()=><Text>11</Text>}
                    // badgeText = '20'
                    onPress={()=> this.setState({selectedTab:'personal'})}
                >
                    {personalView}
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

class Button extends Component{
    _handlePress(e){
        if(this.props.onPress){
            this.props.onPress(e);
        }
    }
    render(){
        return (
            <TouchableOpacity onPress={this._handlePress.bind(this)}
                              style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    img:{
        width:30,
        height:35
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'red'
    },
    button:{
        position:'absolute',
        padding:20,
        top:20,
        left:0
    },
})

export default TabNavigatorDemo;
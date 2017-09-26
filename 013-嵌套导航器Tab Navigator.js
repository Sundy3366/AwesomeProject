/**
 * Created by wangchenxi on 2017/7/25.
 */
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

class RecentChatsScreen extends React.Component {
    render (){
        return <Text>这是主页</Text>
    }
}

class AllContactsScreen extends React.Component {
    render(){
        return <Text>这是商品城</Text>
    }
}

class CartContactsScreen extends React.Component {
    render(){
        return <Text>这是购物车</Text>
    }
}
class personalContactsScreen extends React.Component {
    render(){
        return <Text>这是个人中心</Text>
    }
}
const MainScreenNavigator = TabNavigator({
    主页: { screen:RecentChatsScreen },
    商品: { screen:AllContactsScreen },
    购物车: { screen:CartContactsScreen },
    个人中心: { screen:personalContactsScreen },

})

AppRegistry.registerComponent('AwesomeProject',()=>MainScreenNavigator)
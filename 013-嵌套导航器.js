/**
 * Created by wangchenxi on 2017/7/25.
 */
import React from 'react';
import {
    AppRegistry,
    View,
    Text,
    Button,
} from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>商品</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
                    title="Chat with Lucy"
                    />
            </View>
        )
    }
}
class ChatScreen extends React.Component{
    render(){
        return <Text>购物车</Text>
    }
}
//class PersonScreen extends React.Component{
//    render(){
//        return <Text>我的</Text>
//    }
//}

//const MainScreenNavigator = TabNavigator({
//        主页: { screen:HomeScreen },
//        商品: { screen:GoodsScreen },
//        购物车: { screen:CartScreen },
//        个人中心: { screen:PersonScreen },
//    }
//)
//MainScreenNavigator.navigationOptions  = {
//    title: 'My Chats',
//};
const AwesomeProject = TabNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
})

AppRegistry.registerComponent('AwesomeProject',()=>AwesomeProject)
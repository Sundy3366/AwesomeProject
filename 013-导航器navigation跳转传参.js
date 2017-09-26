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
import { StackNavigator } from 'react-navigation';
/*除了在导航功能中指定目标之外，我们还可以传递将放入新路由的参数。首先，我们将编辑我们的组件以将参数传递到路由中*/
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat', { user: 'Lucy' })}
                    title="Chat with Lucy"
                    />
            </View>
        );
    }
}
/*然后，我们可以编辑我们的组件以显示通过路由传递的参数：ChatScreenuser*/
class ChatScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });
    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}
const AwesomeProject = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
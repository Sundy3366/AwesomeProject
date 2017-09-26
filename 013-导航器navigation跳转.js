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
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                    />
            </View>
        );
    }
}
class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}
const AwesomeProject = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
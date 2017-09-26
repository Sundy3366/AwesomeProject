/**
 * Created by wangchenxi on 2017/8/4.
 */
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Platform
} from 'react-native';
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
if (Platform.OS == 'web') {
    var app = document.createElement('div');
    document.body.appendChild(app);
    AppRegistry.runApplication('AwesomeProject', {
        rootTag: app
    });
}
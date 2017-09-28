/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 基本组件—— Image
 */
import React, { Component } from 'react';
import {Image } from 'react-native';

class ImageView extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        );
    }
}

export default ImageView;
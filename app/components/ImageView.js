/**
 * Created by wangchenxi on 2017/7/24.
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
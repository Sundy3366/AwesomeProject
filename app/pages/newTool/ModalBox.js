/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: react-native-modal 插件 6种表现形态
 * 默认状态 ->从侧面滑动->花式滑动->较慢滑动->下半区滑动->背景点击消失

 */
import React ,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


import Modal from 'react-native-modal';
//外部引入样式
import styles from '../../style/ModalBoxStyle';

export default class example extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            visibleModal:null
        };
    }

    //触发模块按钮组件
    _renderButton(text,onPress){
        return(
            <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
            <Text>{text}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    //模块窗组件
    _renderModalContent(){
        return(
            <View style={styles.modalContent}>
                <Text>Hello!</Text>
                {this._renderButton('关闭',()=>this.setState({visibleModal:null}))}
            </View>
        )
    }
    _renderModalContent2(){
        return(
            <View style={styles.modalContent}>
                <Text>侧面滑动</Text>
                {this._renderButton('关闭',()=>this.setState({visibleModal:null}))}
            </View>
        )
    }


    render(){
        return(
            <View style={{flex:1, padding:50}}>
                {this._renderButton('默认弹层',()=>this.setState({visibleModal:1}))}
                {this._renderButton('从侧面滑动',()=>this.setState({visibleModal:2}))}
                {this._renderButton('较慢弹层',()=>this.setState({visibleModal:3}))}
                {this._renderButton('花式弹层',()=>this.setState({visibleModal:4}))}
                {this._renderButton('下半区弹层',()=>this.setState({visibleModal:5}))}
                {this._renderButton('全屏背景模块窗',()=>this.setState({visibleModal:6}))}
                <Modal isVisible={this.state.visibleModal === 1}>{this._renderModalContent()}</Modal>
                <Modal
                    isVisible={this.state.visibleModal ===2}
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutRight'}
                >{this._renderModalContent2()}</Modal>
                <Modal
                    isVisible={this.state.visibleModal ===3}
                    animationInTiming={2000}
                    animationOutTiming={2000}
                    backdropTransitionInTiming={2000}
                    backdropTransitionOutTiming={2000}
                >{this._renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 4}
                    backdropColor={'red'}
                    backdropOpacity={0.5}
                    animationIn={'zoomInDown'}
                    animationOut={'zoomOutUp'}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}
                >
                    {this._renderModalContent()}
                </Modal>
                <Modal isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
                    {this._renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 6}
                    onBackdropPress={() => this.setState({ visibleModal: null })}
                >
                    {this._renderModalContent()}
                </Modal>
            </View>


        )
    }
}

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#f3f2f2',
//         marginTop:30
//     },
//     item:{
//         flexDirection:'row'
//     },
//     line:{
//         flex:1,
//         height:0.3,
//         backgroundColor:'darkgray'
//     }
// })

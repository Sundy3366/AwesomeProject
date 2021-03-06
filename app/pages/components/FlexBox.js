/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: flex布局--认识flex
 */
'use strit';

import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class Box extends Component{
    render(){
        return (
            <View style={[BoxStyles.box,BoxStyles[this.props.width],BoxStyles[this.props.height]]}>
                <View style={[BoxStyles.top,BoxStyles.height50,BoxStyles[this.props.classBg]]}><Text>top</Text></View>
                <View style={[BoxStyles[this.props.childName]]}>
                    <View style={[BoxStyles.left,BoxStyles[this.props.classBg]]}><Text>left</Text></View>
                    {this.props.children}
                    <View style={[BoxStyles.right,BoxStyles[this.props.classBg]]}><Text>right</Text></View>
                </View>
                <View style={[BoxStyles.bottom,BoxStyles.height50,BoxStyles[this.props.classBg]]}><Text>bottom</Text></View>
                <View style={[BoxStyles.label]}><Text>{this.props.boxName}</Text></View>
            </View>
        )
    }
}

class MarginBox extends Component{
    render(){
        return(
            <View style={[BoxStyles.marginBox]}>
                <Box childName="borderBox" height="height380" width="width380" boxName="margin" classBg="bgred">{this.props.children}</Box>
            </View>
        )
    }
}


class BorderBox extends Component{
    render(){
        return (
            <Box childName="paddingBox" height="height300" width="width300" boxName="border" classBg="bggreen">{this.props.children}</Box>
        )
    }
}

class PaddingBox  extends Component{
    render(){
        return(
            <Box childName="elementBox" height="height200" width="width200" boxName="padding" classBg="bgyellow">{this.props.children}</Box>
        )
    }
}

class ElementBox extends Component{
    render(){
        return(
            <View style={[BoxStyles.box,BoxStyles.height100]}>
                <View style={[BoxStyles.measureBox]}>
                    <View style={[BoxStyles.right]}><Text>height</Text></View>
                </View>
                <View style={[BoxStyles.bottom,BoxStyles.height50]}><Text>width</Text></View>
                <View style={[BoxStyles.lable]}><Text>element</Text></View>
                <View style={[BoxStyles.widthdashed]}></View>
                <View style={[BoxStyles.heightdashed]}></View>
            </View>
        )
    }
}

class BoxModal extends Component{
    render(){
        return (
            <MarginBox>
                <BorderBox>
                    <PaddingBox>
                        <ElementBox>

                        </ElementBox>
                    </PaddingBox>
                </BorderBox>
            </MarginBox>
        )
    }
}
const BoxStyles = StyleSheet.create({
    height50:{
        height:50,
    },
    height380:{
        height:400,
    },
    height300:{
        height:300
    },
    height200:{
        height:200
    },
    height100:{
        height:100
    },
    width380:{
        width:380
    },
    width300:{
        width:300
    },
    width200:{
        width:200
    },
    width100:{
        width:100
    },
    bgred:{
        // backgroundColor:'#6ac5ac'
        backgroundColor:'skyblue'
    },
    bggreen:{
        backgroundColor:'#414142'
    },
    bgyellow:{
        backgroundColor:'#d64078'
    },
    box:{
        // flexDirection:'column',
        flex:1,
        position:'relative'
    },
    label:{
        top:0,
        left:0,
        paddingTop:0,
        paddingRight:3,
        paddingBottom:3,
        paddingLeft:0,
        position:'absolute',
        backgroundColor:'#fdc72f'
    },
    top:{
        justifyContent:'center',
        alignItems:'center'
    },
    bottom:{
        justifyContent:'center',
        alignItems:'center'
    },
    right:{
        width:50,
        justifyContent:'space-around',
        alignItems:'center'
    },
    left:{
        width:50,
        justifyContent:'center',
        alignItems:'center'
    },
    heightdashed:{
        bottom:0,
        top:0,
        right:20,
        borderLeftWidth:1,
        position:'absolute',
        borderLeftColor:'#fdc72f'
    },
    widthdashed: {
        bottom: 25,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        position: 'absolute',
        borderTopColor: '#FDC72F',
    },
    yellow: {
        color: '#FDC72F',
        fontWeight:'900',
    },
    white: {
        color: 'white',
        fontWeight:'900',
    },
    marginBox:{
        position:'absolute',
        top:100,
        marginTop:20,
        paddingLeft:2,
        paddingRight:2
    },
    borderBox:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    paddingBox:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    elementBox:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    measureBox:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'flex-end',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})



export default BoxModal
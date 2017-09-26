import React,{ Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';

import Search from './Search';
import FlexBox from './FlexBox';
import Hotel from './Hotel';

 class ScrollDemo extends Component{
     render(){
         return (
             <ScrollView>
                 <View style={{height:100,backgroundColor:"yellow",margin:10}}>
                     <Text>111</Text>
                 </View>
                 <View style={{height:100,backgroundColor:"yellowgreen",margin:10}}>
                     <Text>222</Text>
                 </View>
                 <View style={{height:100,backgroundColor:"red",margin:10}}>
                     <Text>333</Text>
                 </View>
                 <View style={{height:100,backgroundColor:"pink",margin:10}}>
                     <Text>444</Text>
                 </View>
                 <View style={{height:100,backgroundColor:"skyblue",margin:10}}>
                     <Text>555</Text>
                 </View>
                 <View style={{height:100,backgroundColor:"orange",margin:10}}>
                     <Text>666</Text>
                 </View>
                 <View style={{height:100,backgroundColor:"yellow",margin:10}}>
                     <Text>777</Text>
                 </View>
             </ScrollView>
         )
     }
 }

export default ScrollDemo;
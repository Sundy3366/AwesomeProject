import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    PixelRatio,
    TouchableOpacity,
    Picker
} from 'react-native';

/*
* Picker mode:dialog/dropdown
* */

class PickerDemo extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            language:null
        };
      }
      render(){
          return(
                  <View style={[styles.flex,{marginTop:45}]}>
                      <Text>Pick组件</Text>
                      <Picker
                          selectedValue={this.state.language}
                          onValueChange={lang=> this.setState({language:lang})}
                          mode="dialog"
                          style={{color:'#f00'}}
                      >
                          <Picker.Item label='Java' value='java'/>
                          <Picker.Item label='JavaScript' value='javaScript'/>
                          <Picker.Item label='C语言' value='c'/>
                          <Picker.Item label='PHP开发' value='php'/>
                      </Picker>
                      <Text>{this.state.language}</Text>
                  </View>
              )

      }
}


const styles = StyleSheet.create({
    flex:{
        flex:1
    }
})

export default PickerDemo;
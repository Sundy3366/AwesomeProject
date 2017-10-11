/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: react-native-side-menu——第三方库侧导航插件--基本
 */

import React , { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
//引入第三方库 side-menu
import SideMenu from 'react-native-side-menu';
import Menu from '../../baseComponent/menu';
const uri_image_menu = 'http://image18-c.poco.cn/mypoco/myphoto/20160605/09/17351665220160605093956066.png';

class SideMenuDemo extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态,默认关闭状态,默认选中主页页面
        this.state = {
            isOpen:false,
            selectedItem:'主页'
        };
      }
      toggle(){
          this.setState({
              isOpen:!this.state.isOpen,
          })
      }
      updateMenuState(isOpen){
          this.setState({ isOpen:isOpen })
      }

      onMenuItemSelected = (item) =>{
          this.setState({
              isOpen:false,
              selectedItem:item
          })
      }
    render(){
          const menu = <Menu onItemSelected={this.onMenuItemSelected}/>

        return(
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) =>this.updateMenuState(isOpen)}
            >
                <View style={styles.container}>
                    <Text>我是主页</Text>
                    <Text style={[styles.instructions, { color: 'red' }]}>
                        当前选中的菜单是:{this.state.selectedItem}
                    </Text>
                </View>
                <Button style={styles.button} onPress={()=>this.toggle()}>
                    <Image source={{uri:uri_image_menu, width:60,height:60}}/>
                </Button>

            </SideMenu>
        )
      }
}


class Button extends Component{
    _handlePress(e){
        if(this.props.onPress){
            this.props.onPress(e);
        }
    }
    render(){
        return (
            <TouchableOpacity onPress={this._handlePress.bind(this)}
                              style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    img: {
        width: 40,
        height: 33,
    },
    button:{
        position:'absolute',
        padding:20,
        top:20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});


export default SideMenuDemo;
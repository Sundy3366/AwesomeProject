import React , { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    PixelRatio,
    ScrollView
} from 'react-native';

/*
*
*  * onChangeText:当文本输入框的内容变化时,调用该函数,onChangeText接收一个文本的参数对象
*
* */


var onePt = 1/PixelRatio.get();

// class SearchBox extends Component{
//     render(){
//         return(
//             <View style={[styles.flex,styles.btnTop]}>
//                 <SearchList/>
//             </View>
//         )
//     }
// }

class SearchList extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            show:false,
            value:null
        };
      }
      hide(val){
          this.setState(
              {
                  show:false,
                  value:val
              }
          )
      }

      getValue(text){
          this.setState({
              show:true,
              value:text
          })
      }
    //show boolena this.state
    //value 显示的值

    render(){
        return (
            <View style={[styles.flex,styles.btnTop]}>
                <View style={styles.flexDirection}>
                    <View style={[styles.flex,styles.input]}>
                        <TextInput
                            returnKeyType="search"
                            keyboardType="web-search"
                            placeholder="请输入关键词"
                            underlineColorAndroid='transparent'
                            value={this.state.value}
                            onChangeText = {this.getValue.bind(this)}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.search} onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
                    </View>
                </View>
                {this.state.show?
                    <View style={styles.result}>
                        <Text onPress={this.hide.bind(this,this.state.value+'不忘初心')}
                              style={styles.item} numberOfLines={1}>{this.state.value}不忘初心</Text>
                        <Text onPress={this.hide.bind(this,this.state.value+'园街')}
                              style={styles.item} numberOfLines={1}>{this.state.value}园街</Text>
                        <Text onPress={this.hide.bind(this,this.state.value+'综合商店')}
                              style={styles.item} numberOfLines={1}>{this.state.value}综合商店</Text>
                        <Text onPress={this.hide.bind(this,this.state.value+'桃')}
                              style={styles.item} numberOfLines={1}>80{this.state.value}桃</Text>
                        <Text onPress={this.hide.bind(this,this.state.value+'哈密瓜')}
                              style={styles.item} numberOfLines={1}>{this.state.value}哈密瓜</Text>
                    </View>
                    :null
                }
            </View>

        )
    }
}


const styles = StyleSheet.create({
    item:{
        fontSize:16,
        paddingTop:5,
        paddingBottom:10
    },
    result:{
        marginTop:onePt,
        marginLeft:18,
        marginRight:5,
        height:200
    },
    flex:{
        flex:1
    },
    btnTop:{
        marginTop:20
    },
    flexDirection:{
        flexDirection:'row'
    },
    input:{
        height:45,
        borderColor:'red',
        borderWidth:1,
        marginLeft:10,
        borderRadius:5
    },
    btn:{
        marginLeft:-3,
        height:45,
        width:45,
        marginRight:5,
        backgroundColor:'#23beff',
        justifyContent:'center',
        alignItems:'center'
    },

    search:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    }
})
export default SearchList;
import React , { Component } from 'react';
import { View,Text,StyleSheet,ListView,TouchableOpacity,Image} from 'react-native';

var newData = require('../json/localData.json');

class ListViewDemo1 extends Component{
//初始化数据源(rowHasChanged是优化的一种手段,只有当r1 !== r2的时候才会重新渲染)
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!=r2});
        // 初始状态//给dataSource传递一组 数组;/*将获得的数组传递给dataSource*/
        this.state = {
            ataSource:ds.cloneaWithRows(newData)
        };
    }

    //根据数据源实例化ListView
    //视图部分
    render(){
        return(
            <View style={styles.containder}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }

    //返回一个Item
    renderRow(rowData){

        return(

            <View style={styles.itemStyle}>
                {/*<Image source={{uri:rowData.img}} style={styles.imgStyle}/>*/}
                <View style={styles.subItemStyle}>
                    <Text style={{marginTop:5,fontSize:17}}>{rowData.title}</Text>
                    <Text style={{marginBottom:5,fontSize:13,color:'green'}}>简介</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    itemStyle:{
        flexDirection:'row',
        borderBottomColor:'gray',
        borderBottomWidth:1
    },
    imageStyle:{
        width:60,
        height:60,
        marginLeft:10,
        margin:10
    },
    subItemStyle:{
        justifyContent:'space-around'
    }
})
export default ListViewDemo1;
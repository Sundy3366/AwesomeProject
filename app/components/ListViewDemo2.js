import React , { Component } from 'react';
import { View,Text,StyleSheet,ListView,TouchableOpacity,Image} from 'react-native';

var newData = require('../json/localData.json');

class ListViewDemo2 extends Component {
    // 初始化模拟数据
   // 构造
     constructor(props) {
       super(props);
       const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!=r2});
       // 初始状态
       this.state = {
           dataSource:ds.cloneWithRows(newData.data)
       };
     }
     render(){
         return (
             <View style={{paddingTop:22}}>
                 <ListView
                     dataSource={this.state.dataSource}
                     renderRow={this.renderRow}
                 />
             </View>
         )
     }

    renderRow (rowData){
         return (
             <View>
                 <Text style={{marginTop:5,fontSize:17}}>{rowData.title}</Text>
             </View>
         )
    }
}

const styles = StyleSheet.create({

})
export default ListViewDemo2;
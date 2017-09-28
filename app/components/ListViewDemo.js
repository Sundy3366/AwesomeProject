import React , { Component } from 'react';
import { View,Text,StyleSheet,ListView,TouchableOpacity,Image} from 'react-native';



class ListViewDemo extends Component{
    // 构造
      constructor(props) {
          super(props);
          //初始化数据源(rowHasChanged是优化的一种手段,只有当r1 !== r2的时候才会重新渲染)

          const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!=r2});
          this.state = {
              //给dataSource传递一组 数组
              dataSource:ds.cloneWithRows(['内容0','内容1','内容2','内容3','内容4','内容5'])
          }
        // 初始状态
      }



    /*使用数据源实例化一个ListView组件,定义一个renderRow回调函数,这个函数会接受数组中的每个数据作为参数,并返回一个可渲染的组件(也就是该列表的每一行Item)*/
    render(){
        return (
            <View style={styles.container}>
                {/*根据数据源实例化一个ListView*/}
                <ListView style={{backgroundColor:'yellow'}}
                          //获取数据源
                          dataSource={this.state.dataSource}
                          //根据数据源创建一个Item
                          //注:这里的this.renderRow是隐式写法,系统会根据函数的需要,将对应的参数传递过去(共有4个参数:rowData,sectionID,rowID,highlightRow)
                          renderRow={this.renderRow}
                />
            </View>
        )
    }

    //返回一个Item
    renderRow(rowData,sectionID,rowID){
        return(
            //实例化Item
            <View>
                <Text style={{backgroundColor:'red',height:44}}>{rowData},在第{sectionID}组第{rowID}行</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default ListViewDemo;
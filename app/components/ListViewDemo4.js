import React ,{ Component } from 'react';
import {
    View,
    ListView,
    Text,
    StyleSheet,
    Image,
    ActivityIndicator
} from 'react-native';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class ListViewDemo4 extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
                dataSource:new ListView.DataSource({
                    rowHasChanged:(r1,r2)=>r1!==r2
                }),
            loaded:false
        }
      }

      render(){

          if (!this.state.loaded) {
              return this.renderLoadingView();
          }

          return(
                  <ListView
                      dataSource={this.state.dataSource}
                      renderRow={this.renderMovie}
                      style={styles.listView}
                  />
              )

      }

    renderLoadingView(){
          // return (
          //     <View style={styles.container}>
          //         <Text>Loading......</Text>
          //     </View>
          // )
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <Text>加载中</Text>
            </View>
        )
    }
    renderMovie(movie){
        return(
            <View style={styles.container}>
                <Image
                    source={{uri:movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData(){
        fetch(REQUEST_URL)
            .then((rps)=>rps.json())
            .then((data)=>{
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(data.movies),
                    loaded:true,
                })
            })
            .done()
    }
}

const styles = StyleSheet.create({
    listView:{
        paddingTop:20,
        backgroundColor:'#f5fcff'
    },
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff'
    },
    rightContent:{
        flex:1
    },
    title:{
        fontSize:20,
        marginBottom:8,
        textAlign:'center'
    },
    year:{
        textAlign:'center'
    },
    thumbnail:{
        width:53,
        height:81
    },
})

export default ListViewDemo4;
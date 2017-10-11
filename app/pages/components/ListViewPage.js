/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: ListView组件
 * 适用于滚动式页面--分页加载
 */

/*
*  当数据量很大的时候如何分页加载.这种情形分两种情况考虑:
*  1 . 数据一次性拿到,边滚动边加载
*  2. 数据不是一次性拿到 ,而是有可能分屏取数据
*  对于第一种情况,在ListView内部其实已经做了分页的处理
*  ListView内部通过curRenderedRowsCount状态保存已渲染的行数;初始状态下,要加载的数据条数等于 initialListSize(默认为10条);
*  在滚动时检测当前滚动的位置和最底部的距离,如果小于scrollRenderAheadDistance(默认为1000),就更新curRenderedRowsCount,
*  在它原有值基础上加pageSize个(默认为1条);由于属性变化,触发了ListView重新的render.在渲染过程中curRenderedRowsCount起到截断
*  数据的作用,React的diff算法使得只有新加入的数据才会渲染到了界面上.整个过程类似于Web端懒加载机制,即每次和底部的距离达到一个值时,加载接下来的pageSize个数据
*  对于第二种情况,ListView提供了相关的属性;
*  onEndReachedThreshold,在滚动即将到达底部时触发;
*  onEndReached,在已经到达底部时触发
*  我们可以在这两个方法中调用接口去拿数据,取到数据后在更新数据源
*
*  ##多列(Grid效果)
*
*  很多页面中的列表并非单列的,但实际上只通过布局即可以达到相关效果.ListView 并没有强制要求一个rowData在展示时一定要占满一行,
*  在多列的情况下,我们适时调整每个rowData占据的宽度即可.
*  由于React Native 使用Flexbox 进行布局,给ListView设置属性contentContainerStyle;在实现多列时,主要用到的是 flexWrap:wrap属性:
*  它的效果类似于float,即水平地排列每一项,当放不下时进行折行处理.在设置每行视图占据一半宽度后就达到了两列的效果,多列的类似.
*
*  ##滚动
*
*  ListView 只是整合了数据和展示,但实际滚动的功能还是由ScrollView全权负责.ScrollView实现完全和平台相关:在ios上,它映射为RCTScrollView
* */

/*
* React Native ListView sticky效果实现
* dataBlob
*
* */

import React ,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Image,
    ActivityIndicator,
    TouchableHighlight,

} from 'react-native';

var REQUEST_URL1 = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class ListViewPage extends Component{
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
        if(!this.state.loaded){
            //
            return this.renderLoadingView()
        }

        return(

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                contentContainerStyle={styles.list}
                style={styles.listView}
            />
        )
    }

    //加载数据之前 loading状态
    renderLoadingView(){
        return(
            <View style={styles.container1}>
                <ActivityIndicator size="large" />
                <Text>加载中</Text>
            </View>
        )
    }
    _pressText(title){
        alert(title)
    }
    renderMovie(movie){
        return(
            <View style={styles.container}>
                <Image
                    source={{uri:movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <Text style={styles.year} onPress={this._pressText}>年份{movie.year}</Text>
            </View>
        )
    }
    //请求数据
    componentDidMount() {
        this.fetchData()
    }

    fetchData(){
        fetch(REQUEST_URL1)
            .then((rps)=>rps.json())
            .then((data)=>{
                this.setState({
                    dataSource : this.state.dataSource.cloneWithRows(data.movies),
                    loaded:true
                })
            })
            .done()

    }
}


const styles = StyleSheet.create({
    list:{
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    listView:{
        paddingTop:20,
        backgroundColor:'#f5fcff'
    },
    container:{
        width: 100,
        height: 100,
        backgroundColor: '#F5FCFF',
        margin:5,
        alignItems:'center',
    },
    container1: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    rightContainer:{
        flex:1,
        backgroundColor:'yellow'
    },
    title: {
        fontSize: 14,
        marginBottom: 8,

    },
    year:{
        textAlign:'center'
    },
    thumbnail:{
        width: 80,
        height: 80,
        borderRadius:16,
    }
})
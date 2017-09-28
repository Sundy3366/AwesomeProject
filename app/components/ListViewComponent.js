/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: Fetch组件和—— 获取动态数据——ListView组件垂直滚动的数据列表
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class ListViewComponent extends Component {
    // 再构造函数中初始化变量
    constructor(props) {
        super(props); //这句不可省略
        // 初始状态
        this.state = {
            //创建DataSource 对象
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            loaded: false
        };
    }

    render() {
        //如果loaded == null的情况,初始情况 渲染加载视图
        if (this.state.loaded == false) {
            return this.renderLoadingView()
        }
        return (
            <ListView
                dataSource={this.state.dataSource}

                renderRow={this.renderMovie.bind(this)}
                style={styles.listView}
            />
        )
    }

    //加载数据之前的页面,loading状态
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    style={{height: 100}}
                    size="large"/>
                <Text>正在网络上获取电影数据</Text>
            </View>
        )
    }

    //加载到数据之后页面渲染结构
    renderMovie(movie) {
        return (
            <TouchableOpacity
                onPress={this._handlePress.bind(this, movie)}
            >
                <View style={styles.container1}>

                    <Image
                        source={{uri: movie.posters.thumbnail}}
                        style={styles.thumbnail}
                    />

                    <View style={styles.rightContainer}>

                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.year}>{movie.year}</Text>

                    </View>


                </View>
            </TouchableOpacity>
        )
    }

    //处理点击事件函数
    _handlePress(movie) {
        alert(movie.title)
    }

    //在组件被加载之后,componentDidMount 是 React 组件里面只会调用一次的函数
    componentDidMount() {
        this.fetchData()
    }

    //在React的工作机制下,setState实际上会触发一次重新渲染的流程,此时render函数被触发,发现this.state.movies不再是null这个方法将会负责处理数据的获取
    fetchData() {
        fetch(REQUEST_URL)
            .then((rps) => rps.json())
            .then((data) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data.movies),
                    loaded: true,
                })
            })
            .done()
        //调用了done() 这样可以抛出异常而不是简单的忽略
    }
}

const styles = StyleSheet.create({
    listView: {
        // paddingTop: 20,
        backgroundColor: '#f5fcff'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent:'space-bet',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        borderColor: "red",
        borderWidth: 1
    },
    rightContent: {
        // flex:1,
        backgroundColor: 'yellow'

    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        marginLeft: 20,
        // textAlign:'center'
    },
    year: {
        marginLeft: 20
        // textAlign:'center'
    },
    thumbnail: {
        width: 53,
        height: 81
    }
})

export default ListViewComponent;
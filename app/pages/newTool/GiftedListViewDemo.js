/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: react-native-gifted-listview——第三方库下拉刷新以及加载更多插件--基本
 */
import React , { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import GiftedListView from 'react-native-gifted-listview';
import GiftedSpinner from 'react-native-gifted-spinner';

export default class Example extends Component{
    /**
     * Will be called when refreshing
     * Should be replaced by your own logic
     * @param {number} page Requested page to fetch
     * @param {function} callback Should pass the rows
     * @param {object} options Inform if first load
     */
    _onFetch(page = 1, callback, options){
        setTimeout(()=>{
            var header = '标题'+page;
            var rows = {};
            rows[header] = ['行'+((page - 1) * 3 +1),'行'+((page-1)*3+3)];
            if(page ===5){
                callback(rows,{
                    allLoaded:true, //到达列表的结尾
                });
            }else {
                callback(rows)
            }
        },1000);//模拟网络抓取数据
    }

    /**
     * 触摸一行时
     * @param {object} rowData Row data
     */

    _onPress(rowData){
        alert(rowData+' pressed')
    }

    /**
     * 渲染一行
     * @param {object} rowData Row data
     */
    _renderRowView(rowData){

        return(
            <TouchableHighlight
                style={customStyles.row}
                underlayColor='#c8c7cc'
                // onPress={this._onPress.bind(this, rowData)}
                onPress={()=>{alert(rowData)}}
                // onPress={this._onPress.bind(this,rowData)}
            >
                <Text>{rowData}</Text>
            </TouchableHighlight>
        )
    }
    /**
     * Render a row
     * 行标题
     * @param {object} rowData Row data
     */
    _renderSectionHeaderView(sectionData,sectionID){
        return(
            <View style={customStyles.header}>
                <Text style={customStyles.headerTitle}>{sectionID}</Text>
            </View>
        )
    }
    /**
     *等待刷新时呈现可刷新视图
     *在Android上，视图应该可触摸以触发refreshCallback
     * @param  {function}  refreshCallback调用以刷新列表视图的函数
     */
    _renderRefreshableWaitingView(refreshCallback){
        if (Platform.OS !== 'android'){
            return(
                <View style={customStyles.refreshableView}>
                    <Text style={customStyles.actionsLabel}>
                        ↓
                    </Text>
                </View>
            )
        }else {
            return(
                <TouchableHighlight
                    underlayColor='#c8c7cc'
                    onPress={refreshCallback}
                    style={customStyles.refreshableView}
                >
                    <Text style={customStyles.actionsLabel}>
                        ↻
                    </Text>
                </TouchableHighlight>
            )
        }
    }

    /**
     *拉动刷新已激活时，呈现可刷新视图
     * @platform ios
     */
    _renderRefreshableWillRefreshView(){
        return(
            <View style={customStyles.refreshableView}>
                <Text style={customStyles.actionsLabel}>
                    ↻
                </Text>
            </View>
        )
    }

    /**
     *fetching时可刷新的视图
     */

    _renderRefreshableFetchingView(){
        return(
            <View style={customStyles.refreshableView}>
                <GiftedSpinner/>
            </View>
        )
    }

    _renderPaginationWationView(paginateCallback){
        return(
            <TouchableHighlight
                underlayColor='#c8c7cc'
                onPress={paginateCallback}
                style={customStyles.paginationView}
            >
                <Text style={[customStyles.actionsLabel,{fontSize:13}]}>
                    加载更多
                </Text>
            </TouchableHighlight>
        )
    }

    _renderPaginationFetchingView(){
        return(
            <View style={customStyles.paginationView}>
                <GiftedSpinner/>
            </View>
        )
    }

    _renderPaginationAllLoadedView(){
        return(
            <View style={customStyles.paginationView}>
                <Text style={customStyles.actionsLabel}>
                    ~
                </Text>
            </View>
        )
    }

    _renderEmptyView(refreshCallback){
        return(
            <View style={customStyles.defaultView}>
                <Text style={customStyles.defaultViewTitle}>
                    对不起,已经没有内容加载
                </Text>

                <TouchableHighlight
                    underlayColor='#c8c7cc'
                    onPress={refreshCallback}
                >
                    <Text>
                        ↻
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }

    _renderSeparatorView(){
        return(
            <View style={customStyles.separator}/>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Text style={styles.navBarTitle}>下拉刷新列表</Text>
                </View>
                <GiftedListView
                    rowView={this._renderRowView}
                    onFetch={this._onFetch}
                    initialListSize={12} //无滚动显示的最大行数（listview的高度/行的高度）
                    firstLoader = {true} //显示第一次提取的加载程序
                    pagination = {true}
                    paginationFetchingView={this._renderPaginationFetchingView}
                    paginationAllLoadedView={this._paginationAllLoadedView}
                    paginationWaitingView={this._paginationWaitingView}

                    refreshable={true} //启用iOS的即插即用功能，并为Android轻触即用
                    refreshableViewHeight={50}
                    refreshableDistance={40} //触发拉到刷新的距离 - 更好地将其低于refreshableViewHeight
                    refreshableFetchingView={this._renderRefreshableFetchingView}
                    refreshableWillRefreshView={this._renderRefreshableWillRefreshView}
                    refreshableWaitingView={this._renderRefreshableWaitingView}

                    emptyView={this._renderEmptyView}

                    renderSeparator={this._renderSeparatorView}

                    withSections={true} // enable sections
                    sectionHeaderView={this._renderSectionHeaderView}
                    PullToRefreshViewAndroidProps = {{
                        colors: ['#fff'],
                        progressBackgroundColor: '#003e82',
                    }}

                    rowHasChanged={(r1,r2)=>{
                        r1.id !== r2.id
                    }}

                    distinctRows={(rows)=>{
                        var indentitis = {};
                        var newRows = [];
                        for (var i = 0; i<rows.length;i++){
                            if(indentitis[rows[i].id]){

                            }else{
                                indentitis[rows[i].id]=true
                                newRows.push(row[i])
                            }
                        }
                        return newRows
                    }}
                />
            </View>
        )
    }
}


const customStyles = StyleSheet.create({
    row:{
        padding:10,
        height:44
    },
    header:{
        backgroundColor:'#50a4ff',
        padding:10
    },
    headerTitle:{
        color:'#fff'
    },
    separator:{
        height:1,
        backgroundColor:'#ccc'
    },
    refreshableView:{
        height:50,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    actionsLabel:{
        fontSize:20,
        color:'#007aff'
    },
    paginationView:{
        height:44,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    defaultView:{
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    defaultViewTitle:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:15
    }
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    navBar:{
        height:64,
        backgroundColor:'#007aff',
        justifyContent:'center',
        alignItems:'center'
    },
    navBarTitle:{
        color:'#fff',
        fontSize:16,
        marginTop:12
    }
})
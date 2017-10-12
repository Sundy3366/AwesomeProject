/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 程序入口
 */
import React ,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

//测试组件
import Sa from './pages/components/Sa';

//基本组件
import ImageView from './pages/components/ImageView';
import FlexBox from './pages/components/FlexBox';
import Hotel from './pages/components/Hotel';
import News from './pages/components/News';
import Search from './pages/components/Search';
import ScrollDemo from './pages/components/ScrollDemo';
import FlatListDemo from './pages/components/FlatListDemo';
import SearchList from './pages/components/SearchList';
import TouchableDemo from './pages/components/TouchableDemo';
import ImageDemo from './pages/components/ImageDemo';
import PickerDemo from './pages/components/PickerDemo';
import ProgressBarDemo from './pages/components/ProgressBarDemo';
// import ViewPagerDemo from './pages/components/ViewPagerDemo';

import FetchDemo from './pages/components/FetchDemo';
import ListViewDemo from './pages/components/ListViewDemo';
import ListViewDemo1 from './pages/components/ListViewDemo1';
import ListViewDemo4 from './pages/components/ListViewDemo4';
import ListViewComponent from './pages/components/ListViewComponent';
import ListViewCom from './pages/components/ListViewCom';
import ListViewPage from './pages/components/ListViewPage';
import WebViewDemo from './pages/components/WebViewDemo';
import AsyncStorageDemo from './pages/components/AsyncStorageDemo';
import AsyncStorageDemo1 from './pages/components/AsyncStorageDemo1';
import PhysicsBack from './pages/components/PhysicsBack';
import GiftedListView from './pages/newTool/GiftedListViewDemo';
import FormView from './pages/newTool/FormView'
// import Sa from './pages/components/Sa';

//小demo练习
import CheackBoxView from './pages/test/CheackBoxView'


//第三方插件
//Swiper
import SwiperBasic from './pages/newTool/SwiperBasic';
//tab-navigator
import TabNavigatorDemo from './pages/newTool/TabNavigatorDemo';
// import SideMenu from "react-native-side-menu/index";
import SideMenuDemo from "./pages/newTool/SideMenuDemo";
import ModalBox from "./pages/newTool/ModalBox";


export default class App extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                {/*<Sa/>*/}
                {/*图片组件*/}
                {/*<ImageView/>*/}
                {/*flex布局组件*/}
                {/*<FlexBox/>*/}
                {/*旅游flex布局实例*/}
                {/*<Hotel/>*/}
                {/*<News/>*/}
                {/*<Search/>*/}
                {/*<ScrollDemo/>*/}
                {/*<FlatListDemo/>*/}
                {/*<SearchList/>*/}
                {/*<TouchableDemo/>*/}
                {/*<ImageDemo/>*/}
                {/*<PickerDemo/>*/}
                {/*<ProgressBarDemo/>*/}
                {/*<ViewPagerDemo/>*/}
                {/*<FetchDemo/>*/}

                {/*<ListViewDemo/>*/}
                {/*<ListViewComponent/>*/}
                {/*<Sa/>*/}
                {/*<ListViewDemo4/>*/}
                {/*<ListViewCom/>*/}
                {/*<ListViewPage/>*/}
                {/*<AsyncStorageDemo/>*/}
                {/*<AsyncStorageDemo1/>*/}
                {/*<PhysicsBack/>*/}
                {/*第三方插件库*/}
                {/*<SwiperDemo/>*/}
                {/*<SwiperBasic/>*/}
                {/*<SideMenuDemo/>*/}
                {/*<TabNavigatorDemo/>*/}
                {/*<GiftedListView/>*/}
                {/*<FormView/>*/}
                <ModalBox/>
                {/*<WebViewDemo/>*/}

                {/*demo练习*/}
                {/*<CheackBoxView/>*/}
            </View>
        )
    }
}
// export default App;
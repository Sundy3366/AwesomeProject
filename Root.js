/**
 * Created by wangchenxi on 2017/9/22.
 */
import React ,{ Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet
} from 'react-native'

// import ImageView from './app/components/ImageView';
// import FlexBox from './app/components/FlexBox';
// import Hotel from './app/components/Hotel';
// import News from './app/components/News';
// import Search from './app/components/Search';
// import ScrollDemo from './app/components/ScrollDemo';
// import FlatListDemo from './app/components/FlatListDemo';
// import SearchList from './app/components/SearchList';
// import TouchableDemo from './app/components/TouchableDemo';
// import ImageDemo from './app/components/ImageDemo';
// import PickerDemo from './app/components/PickerDemo';
// import ProgressBarDemo from './app/components/ProgressBarDemo';
// import ViewPagerDemo from './app/components/ViewPagerDemo';
import FetchDemo from './app/components/FetchDemo';
class Test extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                {/*<ImageView/>*/}
                {/*<FlexBox/>*/}
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
                <FetchDemo/>
            </View>
        )
    }
}
AppRegistry.registerComponent('AwesomeProject',()=>Test)
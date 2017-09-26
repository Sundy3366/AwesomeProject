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
import ImageDemo from './app/components/ImageDemo';
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

                <ImaeDemo/>
            </View>
        )
    }
}
AppRegistry.registerComponent('AwesomeProject',()=>Test)
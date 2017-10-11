import React , { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const window = Dimensions.get('window');
const AvatarUri = "http://cdn-qn0.jianshu.io/assets/default_avatar/3-9a2bcc21a5d89e21dafc73b39dc5f582.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240";

export default class Menu extends Component{
    static propTypes={
        onItemSelected:React.PropTypes.func.isRequired,
    };
    render(){
        return(
            <ScrollView
                scrollsToTop={false} style={styles.menu}
            >
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{uri:AvatarUri}}
                    />
                    <Text style={styles.nickName}>不忘初心</Text>
                </View>
                {/*<View><Image style={styles.img} source={require('../../../img/s1.png')}/><Text style={styles.item} onPress={()=>this.props.onItemSelected('了解会员特权')}>了解会员特权</Text></View>*/}
               <Text style={styles.item} onPress={()=>this.props.onItemSelected('主页')}>主页</Text>
                <Text style={styles.item} onPress={()=>this.props.onItemSelected('QQ钱包')}>QQ钱包</Text>
                <Text style={styles.item} onPress={()=>this.props.onItemSelected('个性装扮')}>个性装扮</Text>
                <Text style={styles.item} onPress={()=>this.props.onItemSelected('我的收藏')}>我的收藏</Text>
                <Text style={styles.item} onPress={()=>this.props.onItemSelected('我的相册')}>我的相册</Text>
                <Text style={styles.item} onPress={()=>this.props.onItemSelected('我的文件')}>我的文件</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    menu:{
        flex:1,
        width:window.width,
        height:window.height,
        backgroundColor:'gray',
        // padding:20,

    },
    img:{
        width:10,
        height:10,
    },
    avatarContainer:{
        paddingBottom:20,
        paddingTop:50,
        backgroundColor:'#716ADA'
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:20
    },
    nickName:{
        position:'absolute',
        left:70,
        top:70,
        fontSize:18
    },
    item:{
        fontSize:16,
        padding:20,
        fontWeight:'300',

    }
})
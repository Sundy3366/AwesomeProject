
/*
* 特别说明:BackAndroid 在ios平台下是一个空实现,所以理论上不做这个Platform.OS ==='android'判断也是安全的
* 如果所有事件监听函数中,没有任何一个返回真值,就会默认调用默认行为
* 特别注意:navigator是同一个,这个事件在最外层注册就行(不是initialRoute的组件,是AppRegistry的组件),
* 否则会调用多次的pop的,这个代码接管的是整个应用的后退键
* 放到initialRoute里会有问题,你两三个页面测不出来,页面层次多了组件会unmount,然后事件就丢了
*
* */
import React,{ Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    AsyncStorage,
    ScrollView,
    WebView,
    TouchableOpacity,
    Dimensions,
    BackAndroid,
    Platform
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Model = [
    {
        id: '1',
        title: '猕猴桃1',
        desc: '12个装',
        price: 99,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },
    {
        id: '2',
        title: '牛油果2',
        desc: '6个装',
        price: 59,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },
    {
        id: '3',
        title: '猕猴桃3',
        desc: '3个装',
        price: 993,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },
    {
        id: '4',
        title: '猕猴桃4',
        desc: '4个装',
        price: 994,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },
    {
        id: '5',
        title: '猕猴桃5',
        desc: '5个装',
        price: 995,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },
    {
        id: '6',
        title: '猕猴桃6',
        desc: '6个装',
        price: 996,
        url: 'http://image18-c.poco.cn/mypoco/myphoto/20160610/18/17351665220160610181307073.jpg',
    },

];

export default class AsyncStorageDemo extends Component{
    _pressButton(){
        const{navigator} = this.props;
        if(navigator){
            navigator.pop()
        }
    }

    render(){
        return(
                <List navigator={this.props.navigator}/>
            )

    }
}

//列表项Item组件
class Item extends Component{
    static defaultProps = {
        url: 'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/img/richanglogo168_24.png',
        title: '默认标题',
    }; //注意这里有分号
    static propTypes = {
        url:React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
    }; //注意这里有分号
    render() {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={this.props.press} style={{flex:1}}>
                    <Image
                           resizeMode='contain'
                           style={styles.img}
                           source={{ uri: this.props.url}}
                    >

                        <Text numberOfLines={1} style={styles.item_text}>{this.props.title}</Text>

                    </Image>
                </TouchableOpacity>
            </View>
        );
    }
}

//列表组件List
class List extends Component{

    constructor(props){
        super(props);

        this.state = {
            count :0
        }
    }

    render() {
        let list = [];
        for (let i in Model) {
            if (i % 2 === 0) {
                //两个等号 ：不判断类型
                //三个等号：判断类型
                let row = (
                    <View style={styles.row} key={i}>
                        <Item title={Model[i].title}
                              url={Model[i].url}
                              press={this.press.bind(this, Model[i]) }

                        ></Item>


                        <Item title={Model[parseInt(i) + 1].title}
                              url={Model[parseInt(i) + 1].url}
                              press={this.press.bind(this, Model[parseInt(i) + 1]) }
                        ></Item>


                    </View>


                );
                list.push(row);

            }

        }

        let count = this.state.count;
        let str = null;
        if (count) {
            str = ',共' + count + '件商品';
        }


        return (
            <ScrollView style={{ marginTop: 10 }}>
                {list}
                <Text onPress={this.goGouWu.bind(this) } style={styles.btn}>去结算{str}</Text>


            </ScrollView>
        );


    }

    goGouWu(){
        const {navigator } = this.props;
        if(navigator){
            navigator.push({
                name:'GouWu',
                component:GouWu,
            })
        }
    }

    press(data){
        this.setState({
            count:this.state.count +1
        });
        //AsyncStorage 异步存储
        AsyncStorage.setItem('SP-' + this.genId + '-SP',JSON.stringify(data),function (err) {
            if(err){
                alert(err)
            }else{

            }
        })
    }

    //生成随机ID：GUID 全局唯一标识符（GUID，Globally Unique Identifier）是一种由算法生成的二进制长度为128位的数字标识符
    //GUID生成的代码来自于Stoyan Stefanov

    genId(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        }).toUpperCase();
    }

    componentDidMount() {
        let _that = this;

        AsyncStorage.getAllKeys(
            function (err,keys) {
                if(err){
                    //TODO:存储取数据出错
                    //给用户提示错误信息
                    console.log(err);
                }else{
                    console.log('读取成功了的个数:' +keys.toString());
                }
                _that.setState({
                    count:keys.length,
                })
            }
        )
    }
}


class GouWu  extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            price:0,
            data:[]
        };
      }
   /*物理返回start----*/
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const { navigator } = this.props;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：'+routers.length);
        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为
        }
        return false;//默认行为

    };
    /*物理返回end----*/
      render(){
          //第二次render的时候 data不为空了
          let data = this.state.data;
          let price = this.state.price;
          let list = [];
          for(let i in data){
              price += parseFloat(data[i].price);
              list.push(
                  <View style={[styles.row,styles.list_item]} key={i}>
                      <Text style={styles.list_item_desc}>
                          {data[i].title}
                          {data[i].desc}
                      </Text>
                      <Text style={styles.list_item_price}>人民币:{data[i].price}</Text>
                  </View>
              )
          }

          let str = null;
          if(price){
              str = ',共'+price.toFixed(2)+'元'
          }

          return(
              <ScrollView style={{marginTop:10}}>
                  {list}
                  <Text style={styles.btn}>支付{str}</Text>
                  <Text style={styles.clear} onPress={this.clearStorage.bind(this)}>清空购物车</Text>
              </ScrollView>
          )
      }

    componentDidMount() {
        let _that = this;
        AsyncStorage.getAllKeys(
            function (err,keys) {
                if(err){

                }
                AsyncStorage.multiGet(keys,function (err,result) {
                    let arr = [];
                    for (let i in result){
                        arr.push(JSON.parse(result[i][1]))
                    }

                    _that.setState(
                        {
                            data:arr
                        }
                    )
                })
            }
        )
    }

    clearStorage(){
          let _that = this;
          AsyncStorage.clear(function (err) {
              if(!err){
                  _that.setState({
                      data:[],
                      price:0
                  })
                  alert('购物车已经清空')
              }
          })
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        marginBottom:10
    },
    item:{
        flex:1,
        marginLeft:5,
        borderWidth:1,
        borderColor:'#ddd',
        height:100
    },
    img:{
        // flex:1,
        backgroundColor:'transparent',
        // width:220,
        // height:104
    },
    item_text:{
        backgroundColor:"#000",
        opacity:0.7,
        color:'#fff',
        height:25,
        lineHeight:18,
        textAlign:'center',
        marginTop:74
    },
    btn:{
        flex:1,
        backgroundColor:'#ff7200',
        height:33,
        textAlign:'center',
        textAlignVertical:'center',
        color:'#fff',
        marginTop:40,
        marginRight:10,
        marginLeft:10,
        lineHeight:24,
        fontSize:18
    },
    clear:{
        marginTop:10,
        backgroundColor:'#ff7200',
        color:'#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft: 20,
        marginRight: 10,
        lineHeight: 24,
        height: 33,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})
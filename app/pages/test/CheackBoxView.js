/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: checkbox 插件 以及toast
 */
import React ,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

import CheckBox from 'react-native-check-box';
import keys from '../../json/keys.json';
import Toast from 'react-native-easy-toast'

export default class example extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataArray:[]
        };
      }

    componentDidMount() {
        this.loadData()
    }
    loadData(){
          this.setState({
              dataArray:keys
          })
    }

    onClick(data){
        data.checked = !data.checked;
        //选择提示已选+msg,否则提示未选+msg
        let msg = data.checked?'已选':'未选'
        this.refs.toast.show(msg+data.name)
        // data.checked?alert("已选择"):'null'

    }

    renderView(){
        if(!this.state.dataArray || this.state.dataArray.length ===0) return;
        var len = this.state.dataArray.length;
        var views = [];
        for(var i = 0,l=len-2;i<l;i+=2){
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.state.dataArray[i])}
                        {this.renderCheckBox(this.state.dataArray[i+1])}
                    </View>
                    <View style={styles.line}/>
                </View>
            )
        }
        views.push(
            <View key={len-1}>
                <View style={styles.item}>
                    {len%2 ===0?this.renderCheckBox(this.state.dataArray[len-2]):null}
                    {this.renderCheckBox(this.state.dataArray[len-1])}
                    </View>
            </View>
        )
        return views
    }

    renderCheckBox(data){
        var leftText = data.name;
        return(
            <CheckBox
                style={{flex:1,padding:10}}
                onClick={()=>this.onClick(data)}
                isChecked={data.checked}
                leftText ={leftText}
                checkBoxColor = '#2295E8'
                // onPress={()=>{alert(rowData)}}
                // disabled={true}
                // checkedImage={<Image source={require('../../../img/selected.png')} style={{width:32,height:32}} />}
                // unCheckedImage={<Image source={require('../../../img/nselect.png')} style={{width:32,height:32}} />}

            />
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    {this.renderView()}
                </ScrollView>
                {/*<Toast ref={e=>{this.toast=e}}*/}
                <Toast ref="toast"
                    style={{backgroundColor:'black'}}
                       position='top'
                       positionValue={200}
                       fadeInDuration={750}
                       fadeOutDuration={1000}
                       opacity={0.8}
                       textStyle={{color:'#fff'}}
                />
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f3f2f2',
        marginTop:30
    },
    item:{
        flexDirection:'row'
    },
    line:{
        flex:1,
        height:0.3,
        backgroundColor:'darkgray'
    }
})

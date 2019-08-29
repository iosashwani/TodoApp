/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Dialog from "react-native-dialog";

export default class App extends Component {
  state = {
   dialogVisible: false,
   rotate:'0deg'

 };
componentWillMount(){


}
componentDidMount(){
  // let temp=this;
  // temp.counter=0;
  // setInterval(function(){
  //   temp.counter=temp.counter+6;
  //
  //   let deg=temp.counter+'deg';
  //
  //   console.log("deg",deg)
  //   temp.setState({rotate:deg})
  //   }, 1000);
}

  render(){
    return (

      <View style={{flex:1}}>

       <Text style={{marginTop:40,marginLeft:10,fontSize:30,textColor:'gray'}}>
       Good Morning,
       </Text>
       <Text style={{marginTop:10,marginLeft:10,fontSize:20}}>
        Varun Makhija
       </Text>
           <View style={{marginTop:20,

             flexDirection:'row',
             flex:2,
             backgroundColor:	'#D3D3D3',
             }}
           >
           <View style={{height:200,
                          width:200,
                          borderRadius:100,
                          marginTop:20,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor:'yellow'}}
            >



               <View style={{height:80,width:5,transform:[{rotate: this.state.rotate}],backgroundColor:'blue',justifyContent: 'center', alignItems: 'center', overflow:'hidden'}}>
               </View>
           </View>
           </View>

        <View style={{flexDirection: 'row',Width:320}}>
          <Text style={{marginLeft:10,fontSize:30}}>
          Tasks List
          </Text>
           <TouchableOpacity onPress={this.showDialog}>
           <Text style={{marginLeft:120,fontSize:20}}>
           ADD Tasks List
           </Text>
           </TouchableOpacity>

        </View>
        {this.renderPendingDialog()}
        <View style={{backgroundColor:'grey',marginLeft:20,height:150,width:200,flex:2,borderRadius:10}}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'},{key: 'e'},{key: 'f'},{key: 'g'},{key: 'h'},{key: 'i'},{key: 'a'}],[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'},{key: 'e'},{key: 'f'},{key: 'g'},{key: 'h'},{key: 'i'},{key: 'a'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
          ItemSeparatorComponent = {this.ItemSeparatorComponentMaethod()}
        />
        </View>
      </View>
    );
  }


showDialog = () =>{
  this.setState({ dialogVisible: true });

  };

  currentDateValue = () => {

    console.log("currentDateValue")
  }

  renderPendingDialog = () => {
   return (
       <View>
         <Dialog.Container visible={this.state.dialogVisible}>
           <Dialog.Title>Add Task List</Dialog.Title>
           <Dialog.Description>
             Do you want to delete this account? You cannot undo this action.
           </Dialog.Description>
           <Dialog.Button label="CAN-" onPress={this.handleCancel}/>
           <Dialog.Button label="ADD"  onPress={this.handleAdd}/>
         </Dialog.Container>
       </View>
    )

  }

  ItemSeparatorComponentMaethod = () => {

    console.log("this",this)
  }
  handleCancel = () =>{

      this.setState({dialogVisible:false})

  }



};

const styles = StyleSheet.create({

  engine: {
    position: 'absolute',
    right: 0,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },


  highlight: {
    fontWeight: '700',
  },

});

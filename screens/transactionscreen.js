import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class TransactionScreen extends React.Component {
  constructor(){
    super()
    this.state={
      hasCamPermissions:null,
      scanned:false,
      scannedData:"",
      buttonState:"normal"

    }
  }
  getCameraPermissions=async()=>{
    const{status} = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCamPermissions:status === "granted",
      scanned:false,
      scannedData:"hello ready to scan",
      buttonState:"clicked",
    })
  }
  handlerBarCodeScanner=async({type,data})=>{
    this.setStae={
      scanned:true,
      scannedData:"data",
      buttonState:"normal",
    }
  }
    render() {
      if(this.state.hasCamPermissions=== true && this.state.buttonState==="clicked"){
        return(
          <BarCodeScanner
          onBarCodeScanned={this.state.scanned?"no data yet":this.handlerBarCodeScanner} />
        )
      }
      else{
      return (
        <View >
          <Text>Barcode</Text>
          <Text>{this.state.hasCamPermissions?this.state.scannedData:"Request for Permissions"}</Text>
          <TouchableOpacity style ={{backgroundColor:"cyan",width:100,height:30}}
          onPress = {()=>this.getCameraPermissions()}>
             <Text>Scar Bar Code</Text>
         </TouchableOpacity>
        </View>
      );
    }
  }
  }
  


import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class Searchscreen extends React.Component {
     constructor(){
       super()
       this.state={
         hasCameraPermissions:null,
         scanned:false,
         scanneddata:""

       }
     }
    render() {
      return (
        <View >
          <Text>Search</Text>
        
         </View>
      );
    }
  }
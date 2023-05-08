import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text, View, StyleSheet, KeyboardAvoidingView, ScrollView,PermissionsAndroid} from 'react-native';
import { SafeAreaView } from "react-navigation";

import CustomTouchableOpacity from "../../../components/CustomTouchableOpacity/CustomTouchableOpacity";
const MainMenuScreen = ({navigation}) => {
  const onScan = async ()=>{
    const permissionAndroid = checkCameraPermision();
    console.log(permissionAndroid)
    if (permissionAndroid){
      navigation.navigate("Scaner")
    }
    else{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Inventory Scanner Camera Permission',
          message:
            'Inventory Scanner needs access to your camera ',
          buttonNegative: 'Cancel',
          buttonPositive: 'Allow',
        },
        
      );
      if(granted==='granted'){
        navigation.navigate("Scaner")
      }
      
    }
    
  }
  const checkCameraPermision = async ()=>{
    return await PermissionsAndroid.check("android.permission.CAMERA")
  }
  return (
      <View style={styles.body}>
        <KeyboardAvoidingView>
          <ScrollView showsVerticalScrollIndicator = {false} >
            <StatusBar/>
            <SafeAreaView>

              <Text style={{textAlign:"center"}}>Hello !</Text>
              <CustomTouchableOpacity text="Scan" onPress={onScan}/>
              
            </SafeAreaView>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
};

const styles = StyleSheet.create({
  body:{
      backgroundColor: "#fefffe",
      flex:1,
      backgroundColor: 'red',
      paddingTop : 24
      
  },
});

export default MainMenuScreen;
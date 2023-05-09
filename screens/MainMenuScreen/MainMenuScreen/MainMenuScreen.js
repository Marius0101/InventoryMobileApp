import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text, View, StyleSheet, KeyboardAvoidingView, ScrollView,PermissionsAndroid, Dimensions, Image} from 'react-native';
import { SafeAreaView } from "react-navigation";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {SimpleLineIcons,Ionicons} from 'react-native-vector-icons'

import CustomTouchableOpacity from "../../../components/CustomTouchableOpacity/CustomTouchableOpacity";
const MainMenuScreen = ({navigation}) => {
  const { height, width } = Dimensions.get('window');
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

            <View style= {styles.navbar}>
                <Ionicons name  = "menu" size = {40} color = "#0D1321" style={{ flexShrink: 1 }}/>
                <Image source = {require("../../../assets/images/misc/logo.png")} style= {[styles.logo,{height:height*0.07}]} resizeMode="contain" />
                <SimpleLineIcons name  = "options-vertical" size = {30} color = "#0D1321"/>
              </View>
              
            </SafeAreaView>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
};

const styles = StyleSheet.create({
  body:{
      backgroundColor: "#D3DCDE",
      flex:1,
      marginTop: getStatusBarHeight()
      
  },navbar:{
    backgroundColor: "#ECE9E9",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems : "center",
    flexShrink: 20

  },
  logo:{
    flexShrink: 1
  }
});

export default MainMenuScreen;
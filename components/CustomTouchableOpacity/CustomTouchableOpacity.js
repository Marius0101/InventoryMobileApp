import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
import CustomIcons from '../CustomIcons/CustomIcons';

const CustomTouchableOpacity = ({text, onPress, type='primary', CustomButtonStyle, CustomTextStyle,icon = false, iconType, iconName }) => {
  return (
    <TouchableOpacity
        style={CustomButtonStyle? styles['button_'+CustomButtonStyle]: styles['button_'+type]}
        onPress={onPress}>
        {icon && <CustomIcons type ={iconType} name ={iconName}/>}  
        <Text style={CustomTextStyle? styles['button_text_'+CustomButtonStyle]: styles['button_text_'+type] }>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button_primary:{
        margin:20,
        padding: 15,
        borderRadius: 20,
        marginBottom:30,
        backgroundColor:"#232b2b",
        alignItems:"center" 
    },
    button_text_primary:{
        color:"#fefffe",
        fontWeight: 700,
        fontSize:16,
        paddingLeft: 12,
        paddingRight: 12,
    },
    button_secondary:{
      margin:20,
      padding: 15,
      borderRadius: 20,
      marginBottom:30,
      backgroundColor:"#fefffe",
      alignItems:"center",
      borderColor: "#232b2b",
      borderWidth:2
      
  },
  button_text_secondary:{
      color:"#232b2b",
      fontWeight: 700,
      fontSize:16,
      paddingLeft: 12,
      paddingRight: 12,
  },
    button_tertiary:{

    },
    button_text_tertiary:{
            color: "#232b2b",
        },
  button_back:{
          borderRadius: 20,
          padding: 15,
          margin: 10,
          flexDirection: 'row',
          alignItems:"center"
      },
  button_text_back:{
        color: "#232b2b",
        fontWeight: 700,
        fontSize:22,
        paddingBottom:0,
        paddingRight: 12,
    },
  
});
export default CustomTouchableOpacity;
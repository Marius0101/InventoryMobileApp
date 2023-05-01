import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';

const CustomTouchableOpacity = ({text, onPress, type='primary', CustomButtonStyle, CustomTextStyle}) => {
  return (
    <TouchableOpacity
        style={CustomButtonStyle? styles['button_'+CustomButtonStyle]: styles['button_'+type]}
        onPress={onPress}>
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
        fontSize:16
    },
    button_tertiary:{

    },
    button_text_tertiary:{
            color: "#232b2b",
        },
});
export default CustomTouchableOpacity;
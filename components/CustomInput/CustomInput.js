import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
const CustomInput = ({value,setValue, placeholder, secureTextEntry}) => {
  return (
        <TextInput
            style={styles.text_input}
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
            secureTextEntry = {secureTextEntry}
        />
      
  )
}
const styles = StyleSheet.create({
    text_input:{
        flex:1,
        marginLeft:5,
        fontSize :16,
        color: "#232b2b",
        //backgroundColor : "black"
    },
});
export default CustomInput;
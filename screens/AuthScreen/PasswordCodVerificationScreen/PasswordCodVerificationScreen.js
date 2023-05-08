import {Text} from 'react-native';
import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, View,Image, useWindowDimensions,ScrollView,KeyboardAvoidingView} from 'react-native';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomTouchableOpacity from '../../../components/CustomTouchableOpacity/CustomTouchableOpacity';

const PasswordCodVerificationScreen= ({navigation}) =>{
    const {height} = useWindowDimensions();
    const [email, setEmail] = useState('');
    return (
        
        <View  style={styles.body}>
                <KeyboardAvoidingView>
                <ScrollView showsVerticalScrollIndicator = {false}>
                <StatusBar/>
                    <View style= {styles.logo_container}>
                        <Image source = {require("../../../assets/images/misc/Logo_UNITBV.png")} style= {[styles.logo,{height:height*0.3}]} resizeMode="contain" />
                    </View>
                <SafeAreaView style={styles.touchablecontainer}>
                    <Text style = {styles.title} width = {height*0.3}>Cod verification</Text>
                        <View style= {styles.input_containers}>
                            <View style= {styles.input_container}>
                                <CustomInput
                                    placeholder="Enter the code"
                                    value={email} 
                                    setValue={setEmail}
                                    keyboardType='number-pad'
                                />
                                <CustomTouchableOpacity
                                    text="Send the code"
                                    type='tertiary'
                                />
                            </View>
                        </View>
                    <View style= {styles.buttons_container}>
                        <CustomTouchableOpacity
                            text="Back"
                            type='secondary'
                            onPress={()=>
                                navigation.navigate("ForgotPassword")}
                        />
                        <CustomTouchableOpacity 
                            text="Confirm"
                            onPress={()=>
                                navigation.navigate("ResetPassword")}
                        />
                    </View>
                    
                </SafeAreaView>
                </ScrollView>
                </KeyboardAvoidingView>
            </View>
    )
};
const styles = StyleSheet.create({
    body:{
        backgroundColor: "#fefffe",
        flex:1,

    },
    touchablecontainer: {
        marginLeft: 50,
        marginRight:50,
        marginBottom: 50,
        
    },
    logo:{
        width: "70%",
        maxWidth:300,
        maxHeight:200,
        marginTop:20

    },
    logo_container:{
        alignItems: "center",
        paddingTop:50,
    },
    title:{
        flexWrap: "wrap",
        fontFamily: "sans-serif-medium",
        fontSize: 30,
        color: "#232b2b",
        shadowColor: "black",
        shadowOpacity: 20,
        paddingBottom: 30
    },
    input_container:{
       flexDirection: "row",
       borderBottomColor: "#414a4c",
       borderBottomWidth: 1,
       paddingBottom: 3,
       marginBottom:30,
       alignItems:"center"
    },
    text_input:{
        flex:1,
        marginLeft:5,
        fontSize :16,
        color: "#232b2b",
    },
    text:{
        color: "#232b2b",
    },
    button:{
        margin:20,
        padding: 15,
        borderRadius: 20,
        marginBottom:30,
        backgroundColor:"#232b2b",
        alignItems:"center" 
    },
    button_text:{
        color:"#fefffe",
        fontWeight: 700,
        fontSize:16
    },
    buttons_container:{
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
  });
export default PasswordCodVerificationScreen;
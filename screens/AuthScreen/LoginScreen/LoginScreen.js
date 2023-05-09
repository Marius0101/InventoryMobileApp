import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View,Image, useWindowDimensions,ScrollView,KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomTouchableOpacity from "../../../components/CustomTouchableOpacity/CustomTouchableOpacity";
import {MaterialIcons, Ionicons} from 'react-native-vector-icons';



const LoginScreen = ({navigation}) =>{
    const {height} = useWindowDimensions();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onLogin =() =>{
        console.warn("Login");
        console.warn(email);
        console.warn(password);
    }
    const [secureTextEntry, setsecureTextEntry]  = useState(true);
    const  [nameIcon, setnameIcon] = useState("visibility-off");

    const passwordVisible =() =>{
        if(nameIcon =="visibility-off"){
            setnameIcon("visibility");
            setsecureTextEntry(false);
        }
        else{
            setnameIcon("visibility-off");
            setsecureTextEntry(true);
        }

    }
    return(
        
            <View  style={styles.body}>
                <KeyboardAvoidingView>
                <ScrollView showsVerticalScrollIndicator = {false}>
                <StatusBar/>
                    <View style= {styles.logo_container}> 
                        <Image source = {require("../../../assets/images/misc/logo.png")} style= {[styles.logo,{height:height*0.3}]} resizeMode="contain" />
                    </View>
                <SafeAreaView style={styles.touchablecontainer}>
                    <Text style = {styles.title}>Login</Text>
                        <View style= {styles.input_containers}>
                            <View style= {styles.input_container}>
                                <MaterialIcons name  = "alternate-email" size = {20} color = "#232b2b"/>
                                <CustomInput
                                    placeholder="Email"
                                    value={email} 
                                    setValue={setEmail}
                                />
                            </View>
                            <View style = {styles.input_container}>
                                <Ionicons name="lock-closed-outline" size = {20} color = "#232b2b"
                                /> 
                                <CustomInput
                                    placeholder="Passsword"
                                    value={password}
                                    setValue={setPassword}
                                    secureTextEntry={secureTextEntry}
                                />
                                <TouchableOpacity on onPress={passwordVisible}>
                                    <MaterialIcons name  = {nameIcon} size = {20} color = "#232b2b"/>
                                </TouchableOpacity>
                            </View>
                            <CustomTouchableOpacity
                                text="Forgot your password?"
                                onPress={()=>
                                    navigation.navigate("ForgotPassword")}
                                type = "tertiary"
                            />
                        </View>
                    <CustomTouchableOpacity
                        text="Login"
                        onPress={()=>{
                            navigation.navigate("MainMenuStack",{screen : 'MainMenu'})
                        }}
                    />
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
    }
  });

      


export default LoginScreen;
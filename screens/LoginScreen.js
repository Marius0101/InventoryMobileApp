import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View,TextInput,Image,TouchableOpacity, useWindowDimensions } from 'react-native';
import {MaterialIcons, Ionicons} from 'react-native-vector-icons';


const LoginScreen = ({navigation}) =>{
    const {height} = useWindowDimensions();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const onLogin =() =>{
        console.warn("Login");
        console.warn(email);
        console.warn(password);
    }
    return(
        <View  style={styles.body}>
            <StatusBar/>
                <View style= {styles.logo_container}> 
                    <Image source = {require("../assets/images/misc/Logo_UNITBV.png")} style= {[styles.logo,{height:height*0.3}]} resizeMode="contain" />
                </View>
            <SafeAreaView style={styles.touchablecontainer}>
                <Text style = {styles.title}>Login</Text>
                <View style= {styles.input_containers}>
                    <View style= {styles.input_container}>
                        <MaterialIcons name  = "alternate-email" size = {20} color = "#232b2b"/>
                        <TextInput 
                        style= {styles.text_input}
                         placeholder="Email Address"
                          keyboardType="email-address"
                          value={email}
                          onChangeText={text =>setemail(text)}/>
                    </View>
                    <View style = {styles.input_container}>
                        <Ionicons name="lock-closed-outline" size = {20} color = "#232b2b"
                        /> 
                        <TextInput style= {styles.text_input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}/>
                        <MaterialIcons name  = "visibility-off" size = {20} color = "#232b2b"/>
                    </View>
                    <TouchableOpacity onPress={()=>
                        navigation.navigate("ForgotPassword")}>
                        <Text style= {styles.text}>Forgot?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={onLogin} style={styles.button}>
                    <Text style={styles.button_text} >Login</Text>
                </TouchableOpacity>
            </SafeAreaView>  
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
    input_containers:{
        
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
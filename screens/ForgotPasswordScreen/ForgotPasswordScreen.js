import {Text} from 'react-native';
import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, View,Image, useWindowDimensions,ScrollView,KeyboardAvoidingView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity/CustomTouchableOpacity';
import {MaterialIcons, Ionicons} from 'react-native-vector-icons';

const ForgotPasswordScreen= ({navigation}) =>{
    const {height} = useWindowDimensions();
    const [email, setEmail] = useState('');
    return (
        
        <View  style={styles.body}>
                <KeyboardAvoidingView>
                <ScrollView showsVerticalScrollIndicator = {false}>
                <StatusBar/>
                    <View style= {styles.logo_container}>
                        <Image source = {require("../../assets/images/misc/Logo_UNITBV.png")} style= {[styles.logo,{height:height*0.3}]} resizeMode="contain" />
                    </View>
                <SafeAreaView style={styles.touchablecontainer}>
                    <Text style = {styles.title} width = {height*0.3}>Reset your Password</Text>
                        <View style= {styles.input_containers}>
                            <View style= {styles.input_container}>
                                <MaterialIcons name  = "alternate-email" size = {20} color = "#232b2b"/>
                                <CustomInput
                                    placeholder="Email"
                                    value={email} 
                                    setValue={setEmail}
                                />
                            </View>
                        </View>
                    <View style= {styles.buttons_container}>
                        <CustomTouchableOpacity
                            text="Back to login"
                            type='secondary'
                            onPress={()=>
                                navigation.navigate("Login")}
                        />
                        <CustomTouchableOpacity 
                            text="Send code"
                            onPress={()=>
                                navigation.navigate("CodVerification")}
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
        flexWrap: "wrap"

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
export default ForgotPasswordScreen;
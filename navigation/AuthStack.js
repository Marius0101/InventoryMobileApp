import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from "../screens/LoginScreen/LoginScreen";
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'; 
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () =>{
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    );
};

export default AuthStack;
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from "../screens/LoginScreen/LoginScreen";
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen'; 
import PasswordCodVerificationScreen from "../screens/PasswordCodVerificationScreen/PasswordCodVerificationScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen/ResetPasswordScreen";
import PasswordChangeScreen from "../screens/PasswordChangeScreen/PasswordChangeScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () =>{
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <Stack.Screen name="CodVerification" component={PasswordCodVerificationScreen}/>
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
            <Stack.Screen name="PasswordChange" component={PasswordChangeScreen}/>
        </Stack.Navigator>
    );
};

export default AuthStack;
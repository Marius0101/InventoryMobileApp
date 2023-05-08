import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from "../screens/AuthScreen/LoginScreen/LoginScreen";
import ForgotPasswordScreen from "../screens/AuthScreen/ForgotPasswordScreen/ForgotPasswordScreen";
import PasswordChangeScreen from "../screens/AuthScreen/PasswordChangeScreen/PasswordChangeScreen";
import ResetPasswordScreen from "../screens/AuthScreen/ResetPasswordScreen/ResetPasswordScreen";7
import PasswordCodVerificationScreen from "../screens/AuthScreen/PasswordCodVerificationScreen/PasswordCodVerificationScreen";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

const AuthStack = () =>{
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <Stack.Screen name="CodVerification" component={PasswordCodVerificationScreen}/>
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
            <Stack.Screen name="PasswordChange" component={PasswordChangeScreen}/>
            <Stack.Screen name="MainMenuStack" component={MainStack}/>
        </Stack.Navigator>
    );
};

export default AuthStack;
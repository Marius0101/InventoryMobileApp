import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainMenuScreen from "../screens/MainMenuScreen/MainMenuScreen/MainMenuScreen";
import ScanerScreen from "../screens/MainMenuScreen/ScanerScreen/ScanerScreen";

const Stack = createNativeStackNavigator();

const MainStack = () =>{
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name= "MainMenu" component={MainMenuScreen}/>
            <Stack.Screen name= "Scaner" component={ScanerScreen}/>
        </Stack.Navigator>
    );
};

export default MainStack;
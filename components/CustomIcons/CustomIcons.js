import {Ionicons} from 'react-native-vector-icons'
import { Text } from 'react-native';
import React from 'react';


const CustomIcons = ({name, type}) => {
    if(type = 'Ionicons'){
        return(
            <Ionicons name  = {name} size = {20} color = "#232b2b"/>
        ) 
    }
};

export default CustomIcons;
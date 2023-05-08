import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useState } from 'react';

import AuthStack from './navigation/AuthStack';
import MainStack from './navigation/MainStack';


const App= () =>  {
  const [sign, setSign] = useState(false);
  if (sign) {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    )
  }
}
export default App;




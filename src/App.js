import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Router from './router';


function App() {
  return (
    <NavigationContainer>
    <Router/>
    </NavigationContainer>
  );
}

export default App;
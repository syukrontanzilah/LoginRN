import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home, Login, Splash } from '../pages';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//   <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
//   </Tab.Navigator>
//   );
// }


const Router = () => {
    return (
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
      name="Splash" 
      component={Splash} 
      options={{headerShown: false}}
      />
      
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{headerShown: false}}
        />

      <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
      />


      </Stack.Navigator>
    )
}

export default Router

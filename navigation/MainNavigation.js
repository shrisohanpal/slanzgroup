import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ContactScreen from '../screens/ContactScreen';


const Stack = createStackNavigator();

const  MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Slanz Group' }} />
        <Stack.Screen name="Services" component={ServicesScreen} options={{ title: 'Our Services' }}/>
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact Us' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
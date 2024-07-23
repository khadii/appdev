import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Screens/HomeScreen'
import Welcome from '../Screens/Welcome'


const Stack=createNativeStackNavigator()
export default function AppNavigation() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='welcome' component={Welcome}/>
        </Stack.Navigator>
       
        
    </NavigationContainer>
    
 
  )
}



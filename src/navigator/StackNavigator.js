import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AddStationScreen from '../screens/AddStationScreen'
import TabNavigator from './TabNavigator'
const Stack = createNativeStackNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{
            headerShown:false
        }} component={TabNavigator} name='TabNavigator'  />
        <Stack.Screen options={{
            title:'Add a new station'
        }} component={AddStationScreen} name='AddStationScreen'  />
    </Stack.Navigator>
  )
}

export default StackNavigator
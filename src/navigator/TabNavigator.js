import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabIcon from '../components/TabIcon';
import StationsScreen from '../screens/StationsScreen';
import MapScreen from '../screens/MapScreen';
import { mainColor } from '../constants';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:mainColor,
      }}>
      <Tab.Screen
        options={{
          headerShown:false,
          tabBarIcon: () => <TabIcon icon="map" />,
        }}
        name="MapScreen"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          title: 'Stations',
          tabBarIcon: () => <TabIcon icon="apartment" />,
        }}
        name="StationsScreen"
        component={StationsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

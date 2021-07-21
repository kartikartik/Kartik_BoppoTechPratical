// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import home from './Screen/Home';
import UserProfile from './Screen/UserProfile';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>

<Tab.Navigator
 initialRouteName="Home"
    activeColor="#fff"
    tabBarOptions={customTabBarStyle}
    shifting="false">
        <Tab.Screen name="Products"  component={home} />
        <Tab.Screen name="Profile" component={UserProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const customTabBarStyle = {
  activeTintColor: '#0091EA',
  inactiveTintColor: 'gray',
  style: {backgroundColor: 'white' },
}
export default App;
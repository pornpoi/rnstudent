import React from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import JSONFeedScreen from './JSONFeedScreen';
import CameraScreen from './CameraScreen';
import YoutubeScreen from './YoutubeScreen';

const Stack = createStackNavigator();

const RootStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Register'}}
        />
      </>
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const SuccessTab = () => {
  return (
    <Tab.Navigator initialRouteName="JSON">
      <>
        <Tab.Screen name="JSON" component={JSONStackScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
      </>
    </Tab.Navigator>
  );
};

export default RootStack;

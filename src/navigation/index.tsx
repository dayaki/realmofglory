import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Sermons from '../screens/Sermons';
import Giving from '../screens/Giving';
import SermonDetails from '../screens/SermonDetails';
import Series from '../screens/Series';
import Broadcasts from '../screens/Broadcasts';
import Locations from '../screens/Locations';
import GivingModal from '../screens/GivingModal';
import SermonList from '../screens/SermonList';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const SermonStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sermons" component={Sermons} />
      <Stack.Screen name="SermonDetails" component={SermonDetails} />
      <Stack.Screen name="Series" component={Series} />
      <Stack.Screen name="SermonList" component={SermonList} />
    </Stack.Navigator>
  );
};

const GivingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Give" component={Giving} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="GiveModal" component={GivingModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default function MainStack() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={SermonStack}
        options={{
          title: 'Sermons',
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon name={focused ? 'apps' : 'apps-outline'} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Broadcasts"
        component={Broadcasts}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon name={focused ? 'tv' : 'tv-outline'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Giving"
        component={GivingStack}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon name={focused ? 'wallet' : 'wallet-outline'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarIcon: ({focused}: {focused: boolean}) => (
            <Icon name={focused ? 'map' : 'map-outline'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

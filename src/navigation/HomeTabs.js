import * as React from 'react';
import {Button, View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StoreSearchScreen from '../screens/StoreSearchScreen';
import styles from '../styles/ApiStyles';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function HomeTabs({route, navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          // const isNameValid = Ionicons.hasIcon('enter');
          // console.log(isNameValid);

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'shopping-search' : 'shopping-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'store-search' : 'store-search-outline';
          }

          // You can return any component that you like here!
          return <MCIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{tabBarStyle: {display: 'none'}}}
      />
      <Tab.Screen name="Search" component={StoreSearchScreen} />
    </Tab.Navigator>
  );
}

export default HomeTabs;

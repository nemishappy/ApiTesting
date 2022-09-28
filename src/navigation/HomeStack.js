import * as React from 'react';
import {Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoreStack from './StoreStack';
import ProductStack from './ProductStack';
import HomeScreen from '../screens/HomeScreen';

import SettingsScreen from '../screens/SettingsScreen';
import Header from '../components/Header';
import styles from '../styles/ApiStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          header: props => <Header {...props} />,
        }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Setting" component={SettingsScreen} />
        <HomeStack.Screen name="Product" component={ProductStack} />
        <HomeStack.Screen name="Store" component={StoreStack} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
export default HomeStackScreen;

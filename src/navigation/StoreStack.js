import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/store/SearchScreen';
import StoreDetail from '../screens/store/StoreDetail';
const Stack = createNativeStackNavigator();

function StoreStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Detail" component={StoreDetail} />
    </Stack.Navigator>
  );
}
export default StoreStack;

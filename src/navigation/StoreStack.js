import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/store/SearchScreen';
import StoreDetail from '../screens/store/StoreDetail';
import Header from '../components/Header';
const Stack = createNativeStackNavigator();

function StoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Detail" component={StoreDetail} />
    </Stack.Navigator>
  );
}
export default StoreStack;

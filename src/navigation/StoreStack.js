import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '../screens/CameraScreen';
import DisplayScreen from '../screens/DisplayScreen';
import SearchScreen from '../screens/store/SearchScreen';
import StoreDetail from '../screens/store/StoreDetail';
import NavigationScreen from '../screens/NavigationScreen';
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
      <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="Display" component={DisplayScreen} />
    </Stack.Navigator>
  );
}
export default StoreStack;

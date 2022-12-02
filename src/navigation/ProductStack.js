import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '../screens/CameraScreen';
import DisplayScreen from '../screens/DisplayScreen';
import ListScreen from '../screens/product/ListScreen';
const Stack = createNativeStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Display" component={DisplayScreen} /> */}
      <Stack.Screen name="ListProduct" component={ListScreen} />
    </Stack.Navigator>
  );
}
export default ProductStack;

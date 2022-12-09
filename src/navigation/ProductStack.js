import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '../screens/CameraScreen';
import DisplayScreen from '../screens/DisplayScreen';
import ListScreen from '../screens/product/ListScreen';
import Header from '../components/Header';
import StoreDetail from '../screens/store/StoreDetail';
import NavigationScreen from '../screens/NavigationScreen';
const Stack = createNativeStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        initialParams={{type: 'product'}}
      />
      <Stack.Screen name="Display" component={DisplayScreen} />
      <Stack.Screen name="ListProduct" component={ListScreen} />
      <Stack.Screen name="Detail" component={StoreDetail} />
      <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
    </Stack.Navigator>
  );
}
export default ProductStack;

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchProduct from '../screens/product/SearchProduct';
import DisplayScreen from '../screens/DisplayScreen';
import ListScreen from '../screens/product/ListScreen';
import Header from '../components/Header';
import StoreDetail from '../screens/store/StoreDetail';
import NavigationScreen from '../screens/mapping/NavigationScreen';
const Stack = createNativeStackNavigator();

function ProductTextStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen name="SearchProduct" component={SearchProduct} />
      <Stack.Screen name="ListProduct" component={ListScreen} />
      <Stack.Screen name="Detail" component={StoreDetail} />
      <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
    </Stack.Navigator>
  );
}
export default ProductTextStack;

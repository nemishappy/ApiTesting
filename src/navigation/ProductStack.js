import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from '../screens/CameraScreen';
import DisplayScreen from '../screens/DisplayScreen';
import ListScreen from '../screens/product/ListScreen';
import Header from '../components/Header';
import StoreDetail from '../screens/store/StoreDetail';
const Stack = createNativeStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        initialParams={{type: 'product'}}
      />
      <Stack.Screen name="Display" component={DisplayScreen} />
      <Stack.Screen
        name="ListProduct"
        component={ListScreen}
        // initialParams={{
        //   results: [
        //     {
        //       id: '48',
        //       productName: 'Printer',
        //       imagePath:
        //         'https://firebasestorage.googleapis.com/v0/b/sahakit-project.appspot.com/o/product%2FPrinter_3.jpg?alt=media&token=cf216874-2cb2-48f0-ba30-a852c2beb987',
        //       imageName: '0048',
        //       price: 6990,
        //       storeId: '16',
        //       PromoProduct: {
        //         id: '6',
        //         tittle: 'ลด 10%',
        //         promotionPrice: 6290,
        //         startDate: '2022-11-09T07:00:00.000Z',
        //         endDate: '2023-01-10T07:00:00.000Z',
        //         productId: '48',
        //       },
        //       store: {
        //         storeName: '24 INK',
        //       },
        //     },
        //     {
        //       id: '39',
        //       productName: 'Printer',
        //       imagePath:
        //         'https://firebasestorage.googleapis.com/v0/b/sahakit-project.appspot.com/o/product%2FPrinter_2.webp?alt=media&token=2a73a63f-3ffe-4abe-bacd-14d697e58d4f',
        //       imageName: '0039',
        //       price: 6990,
        //       storeId: '13',
        //       PromoProduct: null,
        //       store: {
        //         storeName: 'Ink Save',
        //       },
        //     },
        //     {
        //       id: '33',
        //       productName: 'Printer',
        //       imagePath:
        //         'https://firebasestorage.googleapis.com/v0/b/sahakit-project.appspot.com/o/product%2FPrinter_1.webp?alt=media&token=b75d88e9-1914-40a3-9e7b-bf34a8dd4be2',
        //       imageName: '0033',
        //       price: 8890,
        //       storeId: '11',
        //       PromoProduct: null,
        //       store: {
        //         storeName: 'Clinic Printer',
        //       },
        //     },
        //     {
        //       id: '60',
        //       productName: 'Printer',
        //       imagePath:
        //         'https://firebasestorage.googleapis.com/v0/b/sahakit-project.appspot.com/o/product%2FPrinter_4.jpeg?alt=media&token=df4867c9-8e73-4fbe-815a-56d2621b0ec8',
        //       imageName: '0060',
        //       price: 3700,
        //       storeId: '20',
        //       PromoProduct: null,
        //       store: {
        //         storeName: 'Extra INK',
        //       },
        //     },
        //   ],
        // }}
      />
      <Stack.Screen name="Detail" component={StoreDetail} />
    </Stack.Navigator>
  );
}
export default ProductStack;

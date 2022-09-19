import * as React from 'react';
import {Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';
import DisplayScreen from '../screens/DisplayScreen';
import CameraScreen from '../screens/CameraScreen';
import Header from '../components/Header';
import styles from '../styles/ApiStyles';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen({route, navigation}) {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          header: props => <Header {...props} />,
        }}>
        <HomeStack.Screen name="HomeTab" component={HomeTabs} />
        <HomeStack.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            header: props => (
              <View style={styles.header}>
                <Text>Camera Screen</Text>
              </View>
            ),
          }}
        />
        <HomeStack.Screen
          name="Display"
          component={DisplayScreen}
          options={{
            header: props => (
              <View style={styles.header}>
                <Text>Display Screen</Text>
              </View>
            ),
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
export default HomeStackScreen;

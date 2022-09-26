import * as React from 'react';
import {Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
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
        <HomeStack.Screen name="Setting" component={SettingsScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
export default HomeStackScreen;

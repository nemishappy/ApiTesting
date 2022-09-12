import * as React from 'react';
import {Image, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import DetailScreen from '../components/DetailScreen';
import CameraScreen from '../components/CameraScreen';
import styles from '../styles/ApiStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View
      style={{
        flex: 3,
        paddingBottom: 6,
        justifyContent: 'flex-start',
        backgroundColor: 'grey',
      }}>
      <Image
        style={{
          backgroundColor: 'yellow',
          flex: 1,
          height: '50%',
          width: '50%',
        }}
        source={require('../assets/logo/nt-eng.png')}
        resizeMode="contain"
      />
    </View>
  );
}

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: props => (
          <View style={styles.header}>
            <LogoTitle {...props} />
            <View
              style={{
                width: '100%',
                height: '100%',
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Icon name="angle-left" size={50} color="#555859" />
            </View>
          </View>
        ),
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          header: props => (
            <View style={styles.header}>
              <Text> dsd</Text>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen;

import * as React from 'react';
import {Button, View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeStack';
import SettingsScreen from '../components/SettingsScreen';
import styles from '../styles/ApiStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

class StackContainer extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-circle' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackContainer;
// {/* <Stack.Navigator
//   screenOptions={{
//     header: props => (
//       <View style={styles.header}>
//         <LogoTitle {...props} />
//         <Icon name="angle-left" size={50} color="#555859" />
//       </View>
//     ),
//   }}>
//   {/* <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Details" component={DetailScreen} /> */}
// </Stack.Navigator>; */}

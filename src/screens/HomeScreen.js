import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, Alert, StatusBar } from 'react-native';

import { FloatingAction } from "react-native-floating-action";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const actions = [
  {
    text: "Search Product",
    icon: <Icon name="shopping-search" size={20} color="#555859" />,
    name: "bt_accessibility",
    color: '#FFD100',
    position: 2
  },
  {
    text: "Search Store",
    icon: <Icon name="store-search" size={20} color="#555859" />,
    name: "bt_language",
    color: '#FFD100',
    position: 1
  },
];

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#FFD100'
    }} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFD100" />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'red',
          justifyContent: 'center',
          paddingBottom: 10,
        }}>
        <Text>Home Screen</Text>
        <FloatingAction
          actions={actions}
          floatingIcon={<Icon name="magnify-scan" size={30} color="#555859" />}
          color='#FFD100'
          distanceToEdge= {{ vertical: 50, horizontal: 30 }}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
            alert(`selected button: ${name}`);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default HomeScreen;

import * as React from 'react';
import {Button, View, Text, StyleSheet, Image, Alert} from 'react-native';

import {FloatingAction} from 'react-native-floating-action';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants';

const actions = [
  {
    text: 'Product Search',
    icon: <Icon name="shopping-search" size={25} color={COLORS.Grey} />,
    name: 'Product',
    color: COLORS.Primary,
    buttonSize: 50,
    position: 1,
  },
  {
    text: 'Search Store',
    icon: <Icon name="store-search" size={25} color={COLORS.Grey} />,
    name: 'Store',
    color: COLORS.Primary,
    buttonSize: 50,
    position: 2,
  },
];

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <FloatingAction
        actions={actions}
        floatingIcon={<Icon name="magnify" size={30} color={COLORS.Grey} />}
        distanceToEdge={{vertical: 60, horizontal: 30}}
        buttonSize={60}
        color={COLORS.Primary}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
          navigation.push(name);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;

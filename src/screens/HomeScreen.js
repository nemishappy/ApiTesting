import * as React from 'react';
import {Button, View, Text, StyleSheet, Image, Alert} from 'react-native';
import CardBanner from '../components/CardBanner';

import {FloatingAction} from 'react-native-floating-action';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS} from '../constants';
import axios from 'axios';

const actions = [
  {
    text: 'Product Search',
    icon: <Icon name="shopping-search" size={30} color={COLORS.secondary} />,
    name: 'Product',
    color: COLORS.primary,
    buttonSize: 50,
    position: 1,
  },
  {
    text: 'Search Store',
    icon: <Icon name="store-search" size={30} color={COLORS.secondary} />,
    name: 'Store',
    color: COLORS.primary,
    buttonSize: 50,
    position: 2,
  },
];

function HomeScreen({navigation}) {
  axios
    .get('http://192.168.100.227:5500/get/test')
    .then(response => {
      console.log('getting data from axios', response.data);
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          margin: 20,
        }}>
        <Text style={{fontWeight: 'bold', ...FONTS.h1}}>What's news</Text>
        <View style={{marginVertical: 20}}>
          <CardBanner
            props={{thumbnail: require('../assets/images/nt_2.jpeg')}}
          />
        </View>
        <Text style={{fontWeight: 'bold', ...FONTS.h1}}>Promotion</Text>
      </View>
      <FloatingAction
        actions={actions}
        floatingIcon={
          <Icon name="magnify" size={30} color={COLORS.secondary} />
        }
        distanceToEdge={{vertical: 60, horizontal: 30}}
        buttonSize={60}
        color={COLORS.primary}
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

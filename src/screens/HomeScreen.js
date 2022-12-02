import * as React from 'react';
import {Button, View, Text, StyleSheet, Image, Alert} from 'react-native';
import CardBanner from '../components/CardBanner';
import RenderList from '../components/PromotionsList';

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
  let mockData = [
    {
      x: 1,
      y: 3,
      title: 'Vehicle Detection',
      label: 'Car',
      icon: '🚙',
      details: 'Vehicle Detection Using Pelco Camera With Polarized Film',
      location: 'Building A , Parking Lot 1st floor , Parking Lot 3 rd floor',
    },
    {
      x: 1,
      y: 4,
      title: 'Human Detection',
      label: 'Person',
      icon: '🙋🏻‍♂️',
      details: 'Human Detection Including Face Detection ',
      location: 'Building A , Cafeteria , 2nd Floor , 5th floor',
    },
    {
      x: 1,
      y: 5,
      title: 'Overall Detection',
      label: 'Detect',
      icon: '📷',
      details: 'Detect everything in selected area and classified into icons',
      location: 'Building A',
    },
    {
      x: 1,
      y: 4,
      title: 'Emergency Detection',
      label: 'Fire',
      icon: '🔥',
      details: 'Fire and Smoke Detection with smart Alarm function',
      location: 'Building A',
    },
    {
      x: 1,
      y: 4,
      title: 'Emergency Detection',
      label: 'Man Down',
      icon: '⚠️',
      details: 'Use for detect collapse people to get help immedieately',
      location: 'Building A',
    },
    // {x:1,y:3,title:'Available Detection',label:'Cafeteria',icon:'🍴',details:'Looking for non-crowded Shops ',location:'Building A'},
  ];
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
        <View
          style={{
            flex: 1,
            margin: 20,
          }}>
          <RenderList promotions={mockData} />
        </View>
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

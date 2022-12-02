import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

function RenderList({promotions}) {
  const {width: viewportWidth, height: viewportHeight} =
    Dimensions.get('window');
  const SLIDE_WIDTH = Math.round(viewportWidth / 2.6);
  const ITEM_HORIZONTAL_MARGIN = 15;
  const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
  const SLIDER_WIDTH = viewportWidth;
  const renderItem = ({item, index}: any) => (
    <View
      style={{
        width: ITEM_WIDTH,
        height: '90%',
        marginRight: SIZES.padding,
        marginBottom: 60,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...styles.shadow,
      }}>
      <View>
        <TouchableOpacity
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Promotion</Text>
          {/* <Image
            source={require('../assets/images/Product1.png')}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View>
      {
        <FlatList
          data={promotions}
          renderItem={renderItem}
          keyExtractor={item => `${item.label}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default RenderList;

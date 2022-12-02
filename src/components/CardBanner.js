import * as React from 'react';
import {TouchableOpacity, View, Text, Image, Dimensions} from 'react-native';
import {SIZES} from '../constants';
import FastImage from 'react-native-fast-image';

function CardBanner({props}) {
  const height = (SIZES.deviceWidth - 40) / 1.77;
  return (
    <View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: height,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {props.uri ? (
          <FastImage
            source={{uri: props.uri}}
            resizeMode="cover"
            style={{
              flex: 1,
              height: '90%',
              width: '90%',
              borderRadius: 12,
            }}
          />
        ) : (
          <FastImage
            source={props.thumbnail}
            resizeMode="cover"
            style={{
              flex: 1,
              height: '90%',
              width: '90%',
              borderRadius: 12,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default CardBanner;

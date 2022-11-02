import * as React from 'react';
import {TouchableOpacity, View, Text, Image, Dimensions} from 'react-native';
import {SIZES} from '../constants';

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
        <Image
          source={props.thumbnail}
          resizeMode="cover"
          style={{
            flex: 1,
            height: '90%',
            width: '90%',
            borderRadius: 12,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default CardBanner;

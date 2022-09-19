import * as React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/ApiStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

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
function Header({props, navigation}) {
  return (
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
        <TouchableOpacity
          onPress={() => navigation.push('Camera')}
          style={styles.capture}>
          <Icon name="angle-left" size={50} color="#555859" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Header;

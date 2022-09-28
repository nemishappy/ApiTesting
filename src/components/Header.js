import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import styles from '../styles/ApiStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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

function LogoTitle2() {
  return (
    <View
      style={{
        height: 50,
        width: 150,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'red',
        alignItems: 'center',
      }}>
      <Image
        style={{
          position: 'absolute',
          left: 0,
          width: '90%',
          height: '90%',
        }}
        source={require('../assets/logo/nt-eng.png')}
        resizeMode="contain"
      />
    </View>
  );
}
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('screen').height * 0.12
    : Dimensions.get('screen').height * 0.09;
function Header({route, navigation, back}) {
  // const routes = navigation.getState()?.routes;
  // const prevRoute = routes[routes.length - 2];
  console.log(route.name);

  // const [route,setRoute] = React.useState();
  // React.useEffect(() => {}, [prevRoute]);
  // console.log(prevRoute);
  const insets = useSafeAreaInsets();
  console.log(back);
  return (
    <View
      style={[
        styles.header,
        {
          height: deviceHeight,
          paddingTop: insets.top,
        },
      ]}>
      {!back ? (
        <>
          <LogoTitle />
          <View
            style={{
              width: '100%',
              height: '100%',
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.push('Setting')}>
              <Icon name="cog-outline" size={35} color="#555859" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={40} color="#555859" />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{route.name}</Text>
        </View>
      )}
    </View>
  );
}
export default Header;

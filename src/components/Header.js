import * as React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from '../styles/ApiStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

function Header({route, navigation}) {
  // const routes = navigation.getState()?.routes;
  // const prevRoute = routes[routes.length - 2];
  console.log(route.name);

  // const [route,setRoute] = React.useState();
  // React.useEffect(() => {}, [prevRoute]);
  // console.log(prevRoute);
  return (
    <View style={styles.header}>
      {route.name === 'Home' ? (
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
        <Text>{route.name}</Text>
      )}
    </View>
  );
}
export default Header;

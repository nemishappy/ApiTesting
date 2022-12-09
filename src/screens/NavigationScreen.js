import ImageZoom from 'react-native-image-pan-zoom';
import SVGMap from '../assets/map/MapFlip.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import Svg, {Path, Circle} from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import bestPath from '../components/FindPath';
import Usericon from '../assets/map/icon_user.svg';
import Shopicon from '../assets/map/icon_shope.svg';
import {useNavigation} from '@react-navigation/native';
import {POSITION} from './PositionXY';
import {COLORS} from '../constants';
import MapPoint from '../assets/json/MapPoint.json';
import FastImage from 'react-native-fast-image';

const NavigationScreen = ({route}) => {
  const navigation = useNavigation();
  const {store, result} = route.params;
  console.log(' receiving date ', store.storeId);
  console.log(' receiving date ', store);

  const location = 'Banana';
  const size = 50;
  const space = 20;

  var global_x = [];
  var global_y = [];

  let sPoint = null;
  const dPoint = Number(store.storeId);
  let length = 0;
  console.log(result);

  if (result) {
    console.log(result.id);
    sPoint = Number(result.id);
    let stringPath = getPath(sPoint, dPoint);
    console.log('stringPath: ' + stringPath);
    const svgpath = require('svg-path-properties');
    const properties = new svgpath.svgPathProperties(stringPath);
    length = properties.getTotalLength();
    console.log('--------length------ ' + length);
  }

  // useEffect(()=> {
  //   dPoint = id;
  // },[id])

  const [status, setStatus] = useState(true);

  const [num, setNum] = useState(0);

  function randomDecimal() {
    var precision = 100; // 2 decimals
    setNum(
      Math.floor(
        Math.random() * (100 * precision - 1 * precision) + 1 * precision,
      ) /
        (1 * precision),
    );
    POSITION.X = num;
    return num;
  }

  //       //repeat
  // setInterval(() => {
  //   randomDecimal();
  // }, 1000)

  // const [offset, setOffset] = useState(length);

  const [positionXY, setPositionXY] = useState({
    X: 0,
    Y: 0,
  });

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = 1200;

  function getPath(sPoint, dPoint) {
    const path = bestPath(sPoint, dPoint);
    console.log(path);
    let stringPath = '';

    for (const id of path) {
      let point = getPoint(id);

      if (id === sPoint) {
        stringPath =
          'M' +
          point[2].toString() +
          ',' +
          point[3].toString() +
          'L' +
          point[0].toString() +
          ',' +
          point[1].toString();
        global_x.push(point[2]);
        global_y.push(point[3]);
        global_x.push(point[0]);
        global_y.push(point[1]);
      } else if (id === dPoint) {
        stringPath =
          stringPath +
          'L' +
          point[0].toString() +
          ',' +
          point[1].toString() +
          'L' +
          point[2].toString() +
          ',' +
          point[3].toString();
        global_x.push(point[0]);
        global_y.push(point[1]);
        global_x.push(point[2]);
        global_y.push(point[3]);
      } else {
        stringPath =
          stringPath + 'L' + point[0].toString() + ',' + point[1].toString();
        global_x.push(point[0]);
        global_y.push(point[1]);
      }
    }
    return stringPath;
  }

  function getPoint(id) {
    var point = [];
    MapPoint.filter(data => data.storeId === id).map(item => {
      point = [item.x, item.y, item.dashX, item.dashY, item.storeName];
    });
    return point;
  }

  //for walk animation
  var i = 0;
  const [interval, setMyInterval] = useState(null);
  useEffect(() => {
    console.log('global_x.length' + global_x.length);

    setInterval(() => {
      if (i < global_x.length) {
        if (global_x[i] == undefined || global_y[i] == undefined) {
          console.log(
            'i :' + i + ' x : ' + global_x[i] + ' y : ' + global_y[i],
          );
        } else {
          setPositionXY({X: global_x[i], Y: global_y[i]});
        }
      } else {
        clearInterval(positionXY);
      }

      i++;
    }, 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  console.log('global_x: ' + global_x);
  console.log('global_y: ' + global_y);

  return (
    <View style={{flex: 1, padding: 20}}>
      {/* start-target point  Part */}
      {sPoint ? (
        <View style={{...styles.header, ...styles.shadow}}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Icon name="map-marker" size={23} color={COLORS.darkblue} />
            <Icon name="dots-vertical" size={15} color={COLORS.black} />
            <Icon name="map-marker-star" size={23} color={COLORS.red} />
          </View>
          <View
            style={{flex: 1, marginLeft: 20, justifyContent: 'space-around'}}>
            <Text style={{fontSize: 20}}>{result.storeName}</Text>
            <View
              style={{
                borderBottomColor: COLORS.black,
                borderBottomWidth: 2,
              }}></View>
            <Text style={{fontSize: 20}}>{store.storeName}</Text>
          </View>
        </View>
      ) : (
        <>
          <View
            style={{
              flexDirection: 'row',
              padding: space,
              marginBottom: space,
              flex: 0,
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              ...styles.shadow,
            }}>
            {store.logoPath !== '' ? (
              <FastImage
                source={{
                  uri: store.logoPath,
                }}
                style={{
                  height: size,
                  borderRadius: 5,
                  width: size,
                  marginRight: space / 2,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            ) : (
              <FastImage
                source={require('../assets/logo/store.png')}
                style={{
                  height: size,
                  borderRadius: 5,
                  width: size,
                  marginRight: space / 2,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}

            <View style={{flex: 1, paddingLeft: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  flex: 1,
                }}>
                <View style={{flex: 0, flexDirection: 'column'}}>
                  <Text style={{fontSize: 20, fontWeight: '500'}}>
                    {store.storeName}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    flex: 0,
                    justifyContent: 'center',
                  }}
                  onPress={() =>
                    navigation.push('CameraScreen', {
                      type: 'store',
                      store: store,
                    })
                  }>
                  <View
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="camera-marker-outline"
                      size={23}
                      color={COLORS.darkblue}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '500',
                        paddingLeft: 5,
                        textDecorationLine: 'underline',
                      }}>
                      navigation
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )}

      {/* Map Part */}
      <View>
        <ScrollView>
          <ImageZoom
            cropWidth={windowWidth}
            cropHeight={windowHeight}
            imageWidth={windowWidth}
            imageHeight={windowHeight}
            minScale={0.5}
            maxScale={3}>
            {/* map */}
            <SVGMap
              style={styles.full}
              width="100%"
              height="100%"
              viewBox={`0 0 ${windowWidth} ${windowHeight}`}
              fill="#000"
            />
            {/* draw shortest path  */}
            {sPoint ? (
              <>
                <Svg style={styles.path}>
                  <Path
                    d={getPath(sPoint, dPoint)}
                    stroke={COLORS.red}
                    strokeWidth="3"
                    strokeDasharray={length}
                  />
                  <Circle
                    cx={positionXY.X}
                    cy={positionXY.Y}
                    r="5"
                    stroke={COLORS.red}
                    stroke-width="3"
                    fill={COLORS.red}
                  />
                </Svg>
                <Text
                  style={{
                    position: 'absolute',
                    left: getPoint(sPoint)[2] - 63,
                    top: getPoint(sPoint)[3],
                    textAlign: 'center',
                    color: 'red',
                    fontWeight: '500',
                    fontSize: 20,
                    paddingHorizontal: 30,
                    textShadowColor: '#585858',
                    textShadowOffset: {width: 3, height: 3},
                    textShadowRadius: 10,
                  }}>
                  you are{'\n'}here
                </Text>
                <Usericon
                  style={{
                    position: 'absolute',
                    left: getPoint(sPoint)[2] - 13,
                    top: getPoint(sPoint)[3] - 31,
                  }}
                  width="50%"
                  height="50%"
                  viewBox={`0 0 ${windowWidth} ${windowHeight}`}
                />
              </>
            ) : (
              <></>
            )}
            <Shopicon
              style={{
                position: 'absolute',
                left: getPoint(dPoint)[2] - 13,
                top: getPoint(dPoint)[3] - 31,
              }}
              width="50%"
              height="50%"
              viewBox={`0 0 ${windowWidth} ${windowHeight}`}
              fill="#000"
            />
          </ImageZoom>
        </ScrollView>
      </View>
    </View>
  );
};
export default NavigationScreen;
const styles = StyleSheet.create({
  full: {
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    width: 200,
    justifyContent: 'center',
    marginLeft: 100,
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },

  path: {
    justifyContent: 'center',
    position: 'absolute',
  },
  header: {
    height: '20%',
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
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

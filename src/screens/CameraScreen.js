import React, {useRef} from 'react';
import {View, Text, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';

function CameraScreen({props, navigation}) {
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef(null);
  const isFocused = useIsFocused();

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto({});
    console.log(photo.path);
    navigation.push('Display', {
      path: photo.path,
      height: photo.height,
      width: photo.width,
    });
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      {device != null ? (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            ref={camera}
            {...props}
            device={device}
            isActive={isFocused}
            photo={true}
          />
          <View style={styles.container}>
            <View style={{width: 50, height: 50, margin: 20}}></View>
            <TouchableOpacity
              onPress={takePhoto}
              style={styles.capture}></TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                const result = await launchImageLibrary({
                  selectionLimit: 1,
                  mediaType: 'photo',
                  includeBase64: false,
                });
                if (result.assets) {
                  console.log(result.assets);
                  navigation.push('Display', {
                    path: result.assets[0].uri,
                    height: result.assets[0].height,
                    width: result.assets[0].width,
                  });
                }
              }}
              style={styles.icon}>
              <Icon name="image" size={25}></Icon>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 80,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: 'grey',
              padding: 20,
            }}>
            <Text style={{fontSize: 16}}>
              Take a photo / Select photo of product
            </Text>
          </View>
        </>
      ) : (
        <View>
          <Text>Camera Screen</Text>
        </View>
      )}
    </View>
  );
}
export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  bottomContainer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'grey',
    padding: 20,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 100,
    width: 60,
    height: 60,
    alignSelf: 'flex-end',
    margin: 20,
  },
  icon: {
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    margin: 20,
  },
});

import * as React from 'react';
import {Button, View, Text, Alert, LoadingView, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
function CameraScreen({navigation}) {
  const devices = useCameraDevices();
  const device = devices.back;
  console.log(device);
  if (device == null)
    return (
      <View>
        <Text>Camera Screen</Text>
      </View>
    );
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}
export default CameraScreen;

import * as React from 'react';
import {Button, View, Text, StyleSheet, Image, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import RNFS from 'react-native-fs';

import ImageResizer from 'react-native-image-resizer';

function PreviewScreen({route, navigation}) {
  const [image, setImage] = React.useState(null);
  const {path, height, width} = route.params;
  console.log(height, width);

  React.useEffect(() => {
    if (path) {
      console.log(path);
      try {
        ImageResizer.createResizedImage(
          path,
          512,
          512,
          'PNG',
          100,
          0,
          undefined,
          false,
          {mode: 'stretch', onlyScaleDown: false},
        )
          .then(res => {
            setImage(res);
            console.log(res);
            sendImage(res);
          })
          .catch(err => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
        Alert.alert('Unable to resize the photo');
      }
    }
  }, [path]);

  const sendImage = async img => {
    let type = img.uri.substring(img.uri.lastIndexOf('.') + 1);
    let image = '';

    await RNFS.readFile(img.path, 'base64').then(res => {
      console.log(res);
      image = 'data:image/png;base64,' + res;
    });
    await axios
      .post('http://192.168.100.227:5500/post/test', {image})
      .then(response => {
        console.log('postting data from axios', response.data);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(type);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Display Screen</Text>

      {image != null ? (
        <>
          <Text>{image.uri}</Text>
          <View
            style={{
              width: 200,
              height: 200,
              justifyContent: 'flex-start',
              backgroundColor: 'grey',
            }}>
            <Image
              style={{
                backgroundColor: 'yellow',
                flex: 1,
              }}
              resizeMode="contain"
              source={{uri: image.uri}}
            />
          </View>
        </>
      ) : (
        <></>
      )}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#EA5B70',
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});

export default PreviewScreen;

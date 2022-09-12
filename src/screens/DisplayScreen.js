import * as React from 'react';
import {Button, View, Text, StyleSheet, Image, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

import ImageResizer from 'react-native-image-resizer';

function PreviewScreen({route, navigation}) {
  const [image, setImage] = React.useState(null);
  const {path} = route.params;

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

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Display Screen</Text>

      {image != null ? (
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

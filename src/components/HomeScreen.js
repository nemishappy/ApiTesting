import * as React from 'react';
import {Button, View, Text, StyleSheet, Image, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

import ImageResizer from 'react-native-image-resizer';

function HomeScreen({navigation}) {
  const [response, setResponse] = React.useState(Object);

  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    if (response) {
      console.log(response);
      if (!response.assets) {
        console.log(response);
        setImage(null);
      } else {
        try {
          ImageResizer.createResizedImage(
            response.assets[0].uri,
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
    }
  }, [response]);

  const goForAxios = () => {
    axios
      .post('https://63180a78ece2736550bf42cb.mockapi.io/images', {
        createdAt: 'now',
        name: 'Nirattisai',
        avatar:
          'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/436.jpg',
        id: '',
      })
      .then(res => {
        console.log('getting data from axios', res.data);
        setTimeout(() => {}, 2000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button title="Send API" onPress={() => navigation.push('Camera')} />
      <Button
        title="Open gallery"
        onPress={async () => {
          await launchImageLibrary(
            {
              selectionLimit: 1,
              mediaType: 'photo',
              includeBase64: false,
            },
            setResponse,
          );
        }}
      />
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
      <Button
        title="Open camera"
        onPress={async () => {
          await launchCamera(
            {
              saveToPhotos: false,
              mediaType: 'photo',
              maxWidth: 512,
              maxHeight: 512,
              includeBase64: false,
            },
            setResponse,
          );
        }}
      />
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

export default HomeScreen;

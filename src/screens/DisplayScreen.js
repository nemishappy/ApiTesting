import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import RNFS from 'react-native-fs';

import ImageResizer from 'react-native-image-resizer';

function PreviewScreen({route, navigation}) {
  const [image, setImage] = React.useState(null);
  const [spinner, setSpinner] = React.useState(true);
  const [result, setResult] = React.useState('');
  const {path, height, width, store, predict} = route.params;
  console.log(height, width);

  React.useEffect(() => {
    if (path) {
      console.log(path);
      setImage({path: path, uri: 'file://' + path});
      sendImage({path: path, uri: 'file://' + path});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const sendImage = async img => {
    setSpinner(true);
    let type = img.uri.substring(img.uri.lastIndexOf('.') + 1);
    let base64 = '';
    console.log('path: ', img.path);
    console.log('uri: ', img.uri);

    await RNFS.readFile(img.path, 'base64').then(res => {
      base64 = `data:image/${type};base64,` + res;
    });
    await axios
      .post('http://192.168.8.105:5500/post/test', {
        base64,
        type: predict,
        width: width,
        height: height,
      })
      .then(response => {
        console.log('postting data from axios', response.data);
        if (response.data.success) {
          // setResult(response.data.result);
          if (predict === 'product') {
            navigation.replace('ListProduct', {
              results: response.data.results,
            });
          } else if (predict === 'store') {
            navigation.replace('NavigationScreen', {
              store: store,
              result: response.data.result,
            });
          }
        } else {
          setResult('Fail to detect, please try again.');
        }
        setSpinner(false);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.status);
          setResult('Something went wrong.');
          setSpinner(false);
        }
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {spinner ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text>Display Screen</Text>
          <Text>{result}</Text>
        </>
      )}
      {/* <Button title="cancel" onPress={() => navigation.goBack()} /> */}
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

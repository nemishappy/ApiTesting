import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

import ImageResizer from 'react-native-image-resizer';

import { FloatingAction } from "react-native-floating-action";

import Icon from 'react-native-vector-icons/FontAwesome';


const actions = [
  {
    text: "Accessibility",
    icon: <Icon name="rocket" size={30} color="#900" />,
    name: "bt_accessibility",
    position: 2
  },
  {
    text: "Language",
    icon: <Icon name="rocket" size={30} color="#900" />,
    name: "bt_language",
    position: 1
  },
  {
    text: "Location",
    icon: <Icon name="rocket" size={30} color="#900" />,
    name: "bt_room",
    position: 3
  },
  {
    text: "Video",
    icon: <Icon name="rocket" size={30} color="#900" />,
    name: "bt_videocam",
    position: 4
  }
];

function HomeScreen({ navigation }) {
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
            { mode: 'stretch', onlyScaleDown: false },
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
        setTimeout(() => { }, 2000);
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
      <FloatingAction
        actions={actions}
        floatingIcon= {<Icon name="search" size={30} color="#fff" />}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
          alert(`selected button: ${name}`);
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

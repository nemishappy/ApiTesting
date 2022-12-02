import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import CardsList from '../../components/CardsList';
import {COLORS, FONTS} from '../../constants';

function ListScreen({navigation}) {
  const mockData = [
    {
      id: '6',
      storeName: 'ASUS',
      imagePath:
        'https://firebasestorage.googleapis.com/v0/b/sahakit-project.appspot.com/o/store%2Ffront%2F006.jpg?alt=media&token=9903685e-1f7c-431d-908c-27be560bac4b',
      imageName: '006',
      logoPath:
        'https://firebasestorage.googleapis.com/v0/b/sahakit-project.appspot.com/o/store%2Flogo%2F006.jpg?alt=media&token=d574512e-bb76-4d05-9b92-877d6fcce0cb',
      logoName: '006logo',
    },
  ];
  const [data, setData] = React.useState(mockData);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          margin: 20,
          backgroundColor: 'grey',
        }}>
        <Text style={{fontWeight: 'bold', ...FONTS.h1}}>Result</Text>
        <View
          style={{
            flex: 1,
            margin: 20,
            backgroundColor: 'red',
          }}>
          <CardsList items={data} isProduct={false} navigation={navigation} />
        </View>
      </View>
    </View>
  );
}

export default ListScreen;

import * as React from 'react';
import {Button, View, Text} from 'react-native';
function SearchScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Store Screen</Text>
      <Button
        title="Go Detail"
        onPress={() =>
          navigation.push('Detail', {
            id: '2',
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
export default SearchScreen;

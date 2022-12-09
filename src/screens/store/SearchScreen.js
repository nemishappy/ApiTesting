import * as React from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardsList from '../../components/CardsList';
function SearchScreen({navigation}) {
  const mockData = [
    {id: 1, storeName: 'JIB'},
    {id: 2, storeName: 'DIY'},
  ];
  const [search, setSearch] = React.useState('');
  const [stores, setStores] = React.useState([]);
  const textInput = React.useRef(null);
  React.useEffect(() => {
    console.log(stores);
  }, [stores]);
  const searchStores = async text => {
    console.log(text);
    await axios
      .get('http://192.168.8.105:5500/store/search', {
        params: {query: text},
      })
      .then(function (response) {
        setStores(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.push('Detail', {
            id: item.id,
          })
        }>
        <View style={styles.item}>
          <Text>{item.storeName}</Text>
          <Icon name="arrow-right" size={18} color="#545859" />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, alignContent: 'center', padding: 20}}>
      <View style={{flexDirection: 'row', paddingBottom: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.button}>
            <TextInput
              ref={textInput}
              style={{flex: 1}}
              autoCorrect={false}
              placeholder="Store Name"
              keyboardType="web-search"
              value={search}
              onChangeText={text => setSearch(text)}
              onSubmitEditing={event => searchStores(event.nativeEvent.text)}
            />
            {search ? (
              <TouchableOpacity onPress={() => setSearch('')}>
                <Icon name="close" size={18} color="#545859" />
              </TouchableOpacity>
            ) : (
              <Icon name="magnify" size={18} color="#545859" />
            )}
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <CardsList items={stores} isProduct={false} navigation={navigation} />
      </View>
      {/* <FlatList
        data={stores}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => {
          return (
            <View style={{alignItems: 'center'}}>
              <Text style={styles.item}>No data found</Text>
            </View>
          );
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderColor: '#545859',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    height: 35,
    width: '100%',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 2,

    color: 'back',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default SearchScreen;

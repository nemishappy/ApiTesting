import * as React from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardsList from '../../components/CardsList';
import SelectableChips from '../../components/SelectableChips';
import {COLORS, FONTS} from '../../constants';

function SearchProduct({data, route, navigation}) {
  const [products, setProducts] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [sorted, setSorted] = React.useState(0);
  console.log(typeof route.params);
  if (route.params) {
    setProducts(route.params.results);
    setSearch(route.params.labels.join());
  }

  const searchProducts = async text => {
    console.log(text);
    await axios
      .get('http://192.168.8.105:5500/product/search', {
        params: {query: text},
      })
      .then(function (response) {
        setProducts(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  React.useEffect(() => {
    console.log(sorted);
    setProducts(SortData(products, sorted));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorted]);
  const SortData = (StoreData, sort) => {
    if (sort === 0) {
      const LowHigh = [...StoreData].sort((a, b) => a.price - b.price);
      // console.log(LowHigh);
      return LowHigh;
    } else if (sort === 1) {
      const HighLow = [...StoreData].sort((a, b) => b.price - a.price);
      // console.log(HighLow);
      return HighLow;
    } else {
      const Promotions = StoreData.filter(StoreData => {
        return StoreData.promotion === 1;
      });
      // console.log(HighLow);
      return Promotions;
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          margin: 20,
        }}>
        <View style={{flexDirection: 'row', paddingBottom: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.button}>
              <TextInput
                style={{flex: 1}}
                autoCorrect={false}
                placeholder="Store Name"
                keyboardType="web-search"
                value={search}
                onChangeText={text => setSearch(text)}
                onSubmitEditing={event =>
                  searchProducts(event.nativeEvent.text)
                }
              />
              {search ? (
                <TouchableOpacity
                  onPress={() => {
                    setSearch('');
                    setProducts([]);
                  }}>
                  <Icon name="close" size={18} color="#545859" />
                </TouchableOpacity>
              ) : (
                <Icon name="magnify" size={18} color="#545859" />
              )}
            </View>
          </View>
        </View>
        {search ? (
          <>
            <Text style={{fontWeight: 'bold', ...FONTS.h1}}>Result</Text>
            <View>
              <SelectableChips value={sorted} onSelectedChange={setSorted} />
            </View>
          </>
        ) : (
          <></>
        )}

        <View
          style={{
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            <CardsList
              items={products}
              isProduct={true}
              isClickable={true}
              navigation={navigation}
            />
          </View>
        </View>
      </View>
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

export default SearchProduct;

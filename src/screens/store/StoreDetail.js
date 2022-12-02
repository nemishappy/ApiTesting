import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import * as React from 'react';
import CardBanner from '../../components/CardBanner';
import CardsList from '../../components/CardsList';
import SelectableChips from '../../components/SelectableChips';
import {COLORS, FONTS, SIZES} from '../../constants';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function StoreDetail({navigation, route}) {
  const id = route.params.id;
  const [store, setStore] = React.useState({});
  const space = 20;
  const size = 50;
  React.useEffect(() => {
    if (id) {
      console.log(id);
      axios
        .get('http://192.168.100.142:5500/store/get', {
          params: {
            id: id,
          },
        })
        .then(function (response) {
          setStore(response.data);
          setProducts(response.data.products);
          setSorted(0);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [id]);

  const [products, setProducts] = React.useState([]);
  const [sorted, setSorted] = React.useState(0);
  React.useEffect(() => {
    console.log(sorted);
    setProducts(SortData(products, sorted));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorted]);
  const SortData = (StoreData, sort) => {
    if (sort == 0) {
      const LowHigh = [...StoreData].sort((a, b) => a.price - b.price);
      console.log(LowHigh);
      return LowHigh;
    } else if (sort == 1) {
      const HighLow = [...StoreData].sort((a, b) => b.price - a.price);
      console.log(HighLow);
      return HighLow;
    } else {
      const Promotions = StoreData.filter(StoreData => {
        return StoreData.promotion == 1;
      });
      // console.log(HighLow);
      return Promotions;
    }
  };

  const {width: viewportWidth, height: viewportHeight} =
    Dimensions.get('window');
  const SLIDE_WIDTH = Math.round(viewportWidth / 2);
  const ITEM_HORIZONTAL_MARGIN = 15;
  const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
  const SLIDER_WIDTH = viewportWidth;
  const PromotionCard = ({item, index}: any) => (
    <View
      style={{
        width: ITEM_WIDTH,
        height: '90%',
        marginRight: 10,
        marginBottom: 60,
        borderRadius: SIZES.radius,
        backgroundColor: 'red',
        ...styles.shadow,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          name="sale"
          size={30}
          color={'#fff'}
          style={{marginHorizontal: 10}}
        />
        <View style={{width: ITEM_WIDTH - 50}}>
          <Text
            style={{
              ...FONTS.h5,
              textAlign: 'left',
              fontWeight: 'bold',
              color: '#fff',
              flexShrink: 1,
              flexWrap: 'wrap',
            }}>
            {item.tittle}
          </Text>

          <Text
            style={{
              ...FONTS.body5,
              textAlign: 'left',
              color: '#fff',
              flexWrap: 'wrap',
            }}
            numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: COLORS.white,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 20,
          shadowColor: '#000',
        }}>
        <Image
          source={{uri: store.logoPath}}
          style={{
            height: size,
            borderRadius: size,
            width: size,
            marginRight: space / 2,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.7,
            shadowRadius: 50,
            shadowColor: '#000',
          }}
        />
        <View
          style={{
            flex: 1,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...FONTS.h1,
              textAlign: 'left',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            {store.storeName}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary2,
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 25,
              paddingVertical: 10,
              paddingHorizontal: 20,
              shadowOffset: {
                width: 0,
                height: 0.5,
              },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              shadowColor: '#000',
            }}>
            <Text style={{fontWeight: 'bold'}}>View Map</Text>
            <Icon
              name="map-marker-radius-outline"
              size={30}
              color={'#000'}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <View style={{marginVertical: 20}}>
          <CardBanner props={{uri: store.imagePath}} />
        </View>
        <Text style={{fontWeight: 'bold', ...FONTS.h2}}>Promotion</Text>
        <View
          style={{
            height: 70,
            width: SLIDER_WIDTH - 40,
            marginTop: 10,
          }}>
          <FlatList
            data={store.PromoStores}
            renderItem={PromotionCard}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <SelectableChips value={sorted} onSelectedChange={setSorted} />
        </View>
        <View style={{flex: 0}}>
          <CardsList
            items={products}
            isProduct={true}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default StoreDetail;

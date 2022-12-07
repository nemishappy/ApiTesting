import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import CardsList from '../../components/CardsList';
import SelectableChips from '../../components/SelectableChips';
import {COLORS, FONTS} from '../../constants';

function ListScreen({data, route, navigation}) {
  // const mockData = [
  //   {
  //     id: '6',
  //     storeName: 'ASUS',
  //     imagePath:
  //       'https://firebasestorage.googleapis.com/v0/b/sahakit-project.appspot.com/o/store%2Ffront%2F006.jpg?alt=media&token=9903685e-1f7c-431d-908c-27be560bac4b',
  //     imageName: '006',
  //     logoPath:
  //       'https://firebasestorage.googleapis.com/v0/b/sahakit-project.appspot.com/o/store%2Flogo%2F006.jpg?alt=media&token=d574512e-bb76-4d05-9b92-877d6fcce0cb',
  //     logoName: '006logo',
  //   },
  // ];
  console.log(route.params.results);
  const [products, setProducts] = React.useState(route.params.results);
  const [sorted, setSorted] = React.useState(0);
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
        <Text style={{fontWeight: 'bold', ...FONTS.h1}}>Result</Text>
        <View
          style={{
            flex: 1,
          }}>
          <View>
            <SelectableChips value={sorted} onSelectedChange={setSorted} />
          </View>
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

export default ListScreen;

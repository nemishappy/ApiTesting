import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';
import {COLORS} from '../constants';

function CardsList({items, isProduct, isClickable, navigation}) {
  console.log('---data form items---');
  console.log(items);

  const space = 20;
  const size = 50;
  const myListEmpty = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  const showePrice = price => {
    let num = new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
    }).format(price);
    return num;
  };
  const fontSize = price => {
    if (price >= 100000) {
      return 18;
    } else {
      return 22;
    }
  };

  const ProductList = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: space,
          marginBottom: space,
          flex: 1,
          borderRadius: 15,
          backgroundColor: '#FFFFFF',
          ...styles.shadow,
        }}>
        {isProduct ? (
          <>
            <FastImage
              source={{
                uri: item.imagePath,
              }}
              style={{
                height: size,
                borderRadius: 5,
                width: size,
                marginRight: space / 2,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={{flex: 1, paddingLeft: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  flex: 1,
                }}>
                {item.PromoProduct ? (
                  <>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                      <Text style={{fontSize: 18, fontWeight: '500'}}>
                        {item.productName}
                      </Text>
                      {isClickable ? (
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Icon
                            name="store"
                            size={15}
                            color="#6D616F"
                            style={{
                              paddingRight: 3,
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 12,
                            }}>
                            {item.store.storeName}
                          </Text>
                        </View>
                      ) : (
                        <></>
                      )}
                      <View
                        style={{
                          backgroundColor: '#FA0606',
                          width: 100,
                          flexDirection: 'row',
                          alignContent: 'center',
                          borderRadius: 3,
                          height: 23,
                          padding: 3,
                          marginTop: 5,
                        }}>
                        <View
                          style={{
                            paddingHorizontal: 3,
                          }}>
                          <Icon name="tag-outline" size={15} color="#ffffff" />
                        </View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '500',
                            color: '#ffffff',
                          }}>
                          {item.PromoProduct.tittle}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: fontSize(item.price) - 8,
                          fontWeight: '500',
                          color: '#6D616F',
                          alignSelf: 'flex-end',
                          textDecorationLine: 'line-through',
                          textDecorationStyle: 'solid',
                        }}>
                        {showePrice(item.price)}
                      </Text>
                      <Text
                        style={{
                          fontSize: fontSize(item.PromoProduct.promotionPrice),
                          fontWeight: '500',
                          color: '#FA0606',
                          alignSelf: 'center',
                        }}>
                        {showePrice(item.PromoProduct.promotionPrice)}
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                      <Text style={{fontSize: 18, fontWeight: '500'}}>
                        {item.productName}
                      </Text>
                      {isClickable && item.store ? (
                        <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <Icon
                            name="store"
                            size={15}
                            color="#6D616F"
                            style={{
                              paddingRight: 3,
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 12,
                            }}>
                            {item.store.storeName}
                          </Text>
                        </View>
                      ) : (
                        <></>
                      )}
                    </View>
                    <Text
                      style={{
                        fontSize: fontSize(item.price),
                        fontWeight: '500',
                        color: '#000',
                        alignSelf: 'center',
                      }}>
                      {showePrice(item.price)}
                    </Text>
                  </>
                )}
              </View>
            </View>
          </>
        ) : (
          <>
            {item.logoPath !== '' ? (
              <FastImage
                source={{
                  uri: item.logoPath,
                }}
                style={{
                  height: size,
                  borderRadius: 5,
                  width: size,
                  marginRight: space / 2,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            ) : (
              <FastImage
                source={require('../assets/logo/store.png')}
                style={{
                  height: size,
                  borderRadius: 5,
                  width: size,
                  marginRight: space / 2,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}

            <View style={{flex: 1, paddingLeft: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  flex: 1,
                }}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Text style={{fontSize: 18, fontWeight: '500'}}>
                    {item.storeName}
                  </Text>
                  {item.PromoProduct ? (
                    <View
                      style={{
                        backgroundColor: '#FA0606',
                        width: 100,
                        flexDirection: 'row',
                        borderRadius: 3,
                        height: 23,
                        justifyContent: 'center',
                        padding: 3,
                        marginTop: 10,
                      }}>
                      <Icon name="tag-outline" size={15} color="#ffffff" />
                      <Text
                        style={{
                          fontSize: 12,
                          alignSelf: 'center',
                          fontWeight: '500',
                          color: '#ffffff',
                        }}>
                        {'  '}
                        promotion
                      </Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {isProduct ? (
        isClickable ? (
          <FlatList
            data={items}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.push('Detail', {id: item.storeId})}>
                  <ProductList item={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
            ListEmptyComponent={myListEmpty}
            scrollEnabled={false}
          />
        ) : (
          items.map(item => <ProductList key={item.id} item={item} />)
        )
      ) : (
        <FlatList
          data={items}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.push('Detail', {id: item.id})}>
                <ProductList item={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
          ListEmptyComponent={myListEmpty}
          scrollEnabled={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scrolling: {
    width: '100%',
  },
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
export default CardsList;

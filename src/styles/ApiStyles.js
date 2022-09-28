import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {COLORS} from '../constants';

const deviceHeight = Dimensions.get('screen').height;
const styles = {
  parentContainer: {
    height: deviceHeight,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 32,
  },
  container: {
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
  header: {
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.Primary,
  },
};
export default styles;

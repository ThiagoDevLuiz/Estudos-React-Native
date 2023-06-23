import React from 'react';
import { View, StyleSheet } from 'react-native';

export default props => {
  return (
    <View style={style.flexV4}>
      <View style={style.V0}></View>
      <View style={style.V1}></View>
      <View style={style.V2}></View>
    </View>
  );
};

const style = StyleSheet.create({
  flexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000',
  },
  V0: {
    backgroundColor: '#009',
    height: 300,
  },
  V1: {
    backgroundColor: '#F00',
    flexGrow: 1,
  },
  V2: {
    backgroundColor: '#090',
    flexGrow: 1,
  },
});

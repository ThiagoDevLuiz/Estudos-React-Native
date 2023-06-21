import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.flexV1}>
      <Quadrado cor="#042" />
      <Quadrado cor="#F00" />
      <Quadrado cor="#090" />
      <Quadrado cor="#009" />
      <Quadrado cor="#950" />
    </View>
  );
};

const style = StyleSheet.create({
  flexV1: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
});

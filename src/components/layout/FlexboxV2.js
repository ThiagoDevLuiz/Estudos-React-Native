import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.flexV2}>
      <Quadrado cor="#042" />
      <Quadrado cor="#F00" />
      <Quadrado cor="#090" />
      <Quadrado cor="#009" />
      <Quadrado cor="#950" />
    </View>
  );
};

const style = StyleSheet.create({
  flexV2: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    backgroundColor: '#000',
  },
});

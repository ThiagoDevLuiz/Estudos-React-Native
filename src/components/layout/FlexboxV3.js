import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.flexV3}>
      <Quadrado cor="#042" />
      <Quadrado cor="#F00" />
      <Quadrado cor="#090" />
      <Quadrado cor="#009" />
      <Quadrado cor="#950" />
    </View>
  );
};

const style = StyleSheet.create({
  flexV3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 350,
    width: '100%',
    backgroundColor: '#000',
  },
});

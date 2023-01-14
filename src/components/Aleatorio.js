import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => {
  let {min, max} = props;
  min += 1000;
  max += 2000;
  const delta = max - min + 1;
  const aleatorio = parseInt(Math.random() * delta) + min;
  return <Text style={Estilo.txtG}>O valor aleatório é {aleatorio}</Text>;
};

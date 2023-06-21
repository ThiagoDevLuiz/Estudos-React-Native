import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <>
      <Text style={Estilo.txtP}>[Início] Membros da Família:</Text>
      {props.children}
      <Text style={Estilo.txtP}>[Fim] Membros da Família:</Text>
    </>
  );
};

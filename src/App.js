import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';


import Mega from './components/mega/Mega';
// import FlexboxV4 from './components/layout/FlexboxV4';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import Primeiro from './components/Primeiro';

export default () => (
  <SafeAreaView style={style.App}>
    <Mega qtdeNumeros={12}/>
    {/*     
    <FlexboxV4 />
    <FlexboxV3 />
    <FlexboxV2 />
    <FlexboxV1 />
    <Familia>
      <Membro nome="Wellington" sobrenome="Luiz" />
      <Membro nome="Marcira" sobrenome="da Silva" />
      <Membro nome="Thiago" sobrenome="Luiz" />
      <Membro nome="Evellyn" sobrenome="da Silva" />
    </Familia>
    <Familia>
      <Membro nome="Luiz" sobrenome="Henrique" />
      <Membro nome="Cristiane" sobrenome="Xavier" />
      <Membro nome="Pedro" sobrenome="Henrique" />
      <Membro nome="Renata" sobrenome="Isabella" />
    </Familia>
    <ParImpar num={3}/>
    <Diferenciar />
    <ContadorV2 /> 
    <Pai />
    <Pai />
    <Contador inicial={100} passo={5}/>
    <Contador />
    <Botao />
    <Titulo
      principal="Cadastro do Produto"
      segundario="Tela de Cadastro do Produto"
    />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <MinMax min="3" max="20" />
    <MinMax min="1" max="94" />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
});

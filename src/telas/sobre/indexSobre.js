import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';

import Sobre from '../../mocks/sobre'
import Style from './style/styleSobre'

const indexSobre = () => {
  return (
    <ScrollView contentContainerStyle={Style.container}>
      <View style={Style.logoContainer}>
        <Image source={Sobre.topo.logo} style={Style.logo} />
      </View>
      <Text style={[Style.paragrafo, Style.texto]}>{Sobre.detalhes.paragrafo1}</Text>
      <Text style={[Style.paragrafo, Style.texto]}>{Sobre.detalhes.paragrafo2}</Text>
      <Text style={[Style.paragrafo, Style.texto]}>{Sobre.detalhes.paragrafo3}</Text>
      <Image source={Sobre.detalhes.estante} style={Style.estante} />
      <Text style={[Style.paragrafo, Style.texto]}>{Sobre.detalhes.paragrafo4}</Text>
      <Text style={[Style.paragrafo, Style.texto]}>{Sobre.detalhes.paragrafo5}</Text>
    </ScrollView>
  );
};

export default indexSobre;
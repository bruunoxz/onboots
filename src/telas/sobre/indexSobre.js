import React, {useRef, useState} from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {Video, ResizeMode} from 'expo-av'

import Sobre from '../../mocks/sobre'
import Style from './style/styleSobre'
import promovideo from '../../../assets/videopromo.mp4'


const indexSobre = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

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
      <Text style = {[Style.paragrafo, Style.texto]}>{Sobre.detalhes.paragrafo6}</Text>
      <Video ref ={video}
        style = {styles.video}
        source = {promovideo}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(()=> status)}
        />
    </ScrollView>
  );
};

export default indexSobre;

const styles = StyleSheet.create({
  video: {
    width: '100%', // Ajuste conforme necessário
    height: 200, // Ajuste conforme necessário
    marginVertical: 10, // Ajuste conforme necessário
  },
});
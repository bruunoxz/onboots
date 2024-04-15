import React from 'react';
import { FlatList, View, Image, Text } from 'react-native';

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'

export default function Produto({topo, detalhes, itens}) {

  const renderItem = ({item:{nome, imagem}}) => 
    <View key={nome}>
      <Image source={imagem}></Image>
      <Text>{nome}</Text>
    </View>
  

  return <>
    <FlatList
      data={itens.lista}
      renderItem={renderItem}
      keyExtractor={({nome})=>{nome}}
    />
      <Topo {...topo}/>
      <Detalhes {...detalhes}/>
  </>
}
/*
const styles = StyleSheet.create({
    campus: {
      width: "100%",
      height: 1197 / 1600 * width,
    },
    titulo: {
      width: "100%",
      position: "absolute",
      textAlign: "center",
      fontSize: 20,
      color: "black",
      fontWeight: "bold",
      padding: 8,
    },
    produto: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    nome: {
      color: "black",
      fontWeight: "bold",
      fontSize: 24,
      paddingTop: 25,
      paddingLeft: 25
    },
    descricao: {
      fontSize: 18,
    },
    preco: {
      fontSize: 26,
      fontWeight: "bold",
      marginTop: 8
    },
    logo: {
      width: 70,
      height: 70,
    },
    logotipo: {
      flexDirection: "row",
    }
  });*/
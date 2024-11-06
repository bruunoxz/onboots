import React, {useState} from 'react';
import { TouchableOpacity, Modal, Pressable, View, Image, Alert } from 'react-native';
import {Card, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "../style/styleCatalogo"

export default function CardCatalogo ({ item: { id, titulo, subtitulo, imagem } }) {
  const [modalVisible, setModalVisible] = useState(false);  

  async function addListaDesejos(id, titulo, imagem){

    //Produto favoritado
    const addProduto=[{
      id: id,
      titulo: titulo,
      imagem: imagem
    }];


    //Verifica se a lista está vazia
    const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
    
    if(listaDesejosSalva == null){
      //Lista vazia, insere o produto clicado
      const listaDesejosAtualizada = JSON.stringify(addProduto);

      //Insere no AsyncStorage
      await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);

      Alert.alert("O produto foi incluido com sucesso na Lista de Desejos!");
      console.log("Adicionou produto");
      console.log(listaDesejosAtualizada);
    }else{
      //A lista já possui itens
      const listaDesejos = JSON.parse(listaDesejosSalva);

      //Insere mais um produto na lista
      listaDesejos.push({id: id, titulo: titulo, imagem: imagem});

      //Converte o array para string
      const listaDesejosAtualizada = JSON.stringify(listaDesejos);

      //Insere no AsyncStorage
      await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
      
      Alert.alert("O produto foi incluido com sucesso na Lista de Desejos!");
      console.log("Mais um produto na lista");
      console.log(listaDesejosAtualizada);
    }
  }

  return <View style={styles.card}>
    <TouchableOpacity onPress={()=> setModalVisible(true)}>
    <Card>
      <Card.Content>
        <Text variant="titleLarge" style={styles.tituloCard}>{titulo}</Text>
        <Text variant="bodyMedium" style={styles.descricao}>{subtitulo}</Text>
      </Card.Content>
      <Card.Cover style={styles.imgProd} source={imagem} />
    </Card>
    <TouchableOpacity onPress={()=>addListaDesejos(id, titulo, imagem)}>
      <Ionicons name="heart" size={25} color="black" />
    </TouchableOpacity>
    </TouchableOpacity>
    <Modal visible={modalVisible} transparent={true}>
    <View style={styles.modalView}>
        <Text style={styles.tituloCard}>{titulo}</Text>
        <Image style={styles.imgModal} source={imagem}></Image>
        <Text style={styles.descricao}>{subtitulo}</Text>
        <Pressable onPress={() => setModalVisible(false)}>
            <Text>Fechar</Text>
        </Pressable>
    </View>
</Modal>
</View>
}


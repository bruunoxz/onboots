import React, {useState} from 'react';
import { TouchableOpacity, Modal, Pressable, View, Image } from 'react-native';
import {Card, Text } from 'react-native-paper';

import styles from "../style/styleCatalogo"

export default function CardCatalogo ({ item: { titulo, subtitulo, imagem } }) {
  const [modalVisible, setModalVisible] = useState(false);  

  return <View style={styles.card}>
    <TouchableOpacity onPress={()=> setModalVisible(true)}>
    <Card>
      <Card.Content>
        <Text variant="titleLarge" style={styles.tituloCard}>{titulo}</Text>
        <Text variant="bodyMedium" style={styles.descricao}>{subtitulo}</Text>
      </Card.Content>
      <Card.Cover style={styles.imgProd} source={imagem} />
    </Card>
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


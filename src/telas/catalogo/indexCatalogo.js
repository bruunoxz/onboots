import React from 'react';
import { FlatList, View, Image } from 'react-native';

import CardCatalogo from "./componentes/CardCatalogo";
import Texto from "../../componentes/Texto";
import styles from "./style/styleCatalogo"

export default function Catalogo({ card }) {

  return (
    <View style={styles.container}>
      <Texto style={styles.titulo}>{card.titulo}</Texto>
      <FlatList
        style={styles.lista}
        data={card.produtos}
        renderItem={({ item }) => <CardCatalogo item={item} />} 
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}





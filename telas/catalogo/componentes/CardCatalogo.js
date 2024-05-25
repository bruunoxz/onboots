import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import Texto from "../../../componentes/Texto"

export default function CardCatalogo ({ item: { titulo, subtitulo, imagem } }) {
  return (
    <Card>
      <Card.Content>
        <Texto style={{ fontWeight: 'bold' }}>{titulo}</Texto>
        <Texto>{subtitulo}</Texto>
      </Card.Content>
      <Card.Cover source={imagem} />
    </Card>
  );
}


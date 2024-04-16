import React from 'react';
import { FlatList, View, Image, Text } from 'react-native';

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import Item from './componentes/Item'

export default function Produto({topo, detalhes, itens}) {

  return <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({id})=>{id}}
      ListHeaderComponent={()=>{
        return <>
          <Topo {...topo}/>
          <Detalhes {...detalhes}/>
        </>
      }}
    />
}

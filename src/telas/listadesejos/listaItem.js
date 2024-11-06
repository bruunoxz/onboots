import React from "react";
import {View, StatusBar, TouchableOpacity } from "react-native";
import { Card } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"

import Texto from "../../componentes/Texto"
import styles from './estilos'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListaItem ({id, titulo, imagem}){
    
    //Função para remover itens da Lista de Desejos
    async function removeProdListaDesejos(id){
        //Captura a Lista de Desejos
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        //Organiza a lista de desejos em array
        const listaDesejos = JSON.parse(listaDesejosSalva);

        //Exclui o item e transforma em string para atualizar o AsyncStorage
        const ListaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item) => item.id !== id));

        //Atualiza o AsyncStorage
        await AsyncStorage.setItem('ListaDesejos', ListaDesejosAtualizada);
        Alert.alert("Produto removido da Lista de Desejos.")
        console.log("Removeu item da lista.")

        //Atualiza a tela da Lista de Desejos
        NavigationPreloadManager.reset({index:0, routes: [{name: 'Lista de DEsejos'}],})
    }

    return <View style={styles.cardContainer}>
        <StatusBar/>
        <Card mode='contained' style={styles.card}>
            <Card.Content>
                <Card.Cover source={imagem} style={styles.imagem}/>
                <Texto style={styles.nomeProduto}>{titulo}</Texto>
                <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=>removeProdListaDesejos(id)}>
                    <Ionicons name="trash" size ={20} color="black"/>
                </TouchableOpacity>
            </Card.Content>
        </Card>
    </View>
}

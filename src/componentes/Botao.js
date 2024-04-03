import React from "react";
import {StyleSheet, TouchableOpacity, Alert } from 'react-native';

import Texto from "./Texto"

export default function Botao() {
    return <TouchableOpacity style={styles.botao} onPress={() => { Alert.alert("Carrinho de compras", "Este produto será adicionado ao seu carrinho de compras.") }}>
        <Texto style={styles.botaoTexto}>Comprar</Texto>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    botao: {
        width: "80%",
        marginTop: 16,
        backgroundColor: "#bee0ec",
        paddingVertical: 16,
        borderRadius: 6,
    },
    botaoTexto: {
        textAlign: "center",
        fontSize: 22,
        lineHeight: 26,
        fontWeight: "bold"
    }
});
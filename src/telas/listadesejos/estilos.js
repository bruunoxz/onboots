import { StyleSheet } from "react-native";

export default StyleSheet.create({
    listaContainer: {
        flex: 1,
        width: '100%',
        height: 100
    },
    cardContainer: {
        width: '50%',
        height: 220
    },
    imagem: {
        width: '90%',
        height: '80%',
        alignSelf: 'center',
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#d3d3d3',
    },
    nomeProduto: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        margin: 0
    },
    titulo: {
        fontSize: 26,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    textoLista: {
        fontSize: 16,
        paddingBottom: 10,
    }

})

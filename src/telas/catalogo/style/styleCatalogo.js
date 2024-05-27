import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: 'black',
      },
    titulo: {
      fontSize: 24,
      marginBottom: 10,
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
    },
    flatListContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      card: {
        alignItems: "center",
        width: "47%",
        margin: 5,
        backgroundColor: "white",
      },    
      lista:{
        marginTop: 60,
        marginBottom: 100,
        },
        tituloCard: {
            height: 80,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 24,
            color: "black",
            padding: 10,
        },
        descricao: {
            textAlign: "justify",
            fontSize: 18,
            color: "black",
            padding: 5,
            minHeight: 90,
        },
        imgProd: {
            borderRadius: 20,
            height: 200,
        },
        imgModal: {
            borderRadius: 20,
            height: 200,
            width: 200,
        }, centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
        },
        modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },    modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
  });

  /*    tela: {
        alignItems: "center",
        backgroundColor: "#ADFF2F",
    },
    titulo: {
        fontWeight: "bold",
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 26,
        color: "black",
        padding: 16,
    },
    lista:{
        marginTop: 60,
    },
    card: {
        alignItems: "center",
        width: "47%",
        margin: 5,
        backgroundColor: "white",
    },
    tituloCard: {
        height: 80,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24,
        color: "black",
        padding: 10,
    },
    descricao: {
        textAlign: "justify",
        fontSize: 18,
        color: "black",
        padding: 5,
        minHeight: 90,
    },
    imgProd: {
        borderRadius: 20,
        height: 200,
    },
});*/


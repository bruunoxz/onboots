import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
      },
    titulo: {
      fontSize: 24,
      marginBottom: 10,
    },
    flatListContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      card: {
        width: '48%', // Definindo a largura para ocupar 48% da tela para garantir que dois itens sejam exibidos lado a lado
        marginBottom: 10,
      },
  });
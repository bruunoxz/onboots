import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from './assets/Logo.png'
import Produto from './src/telas/Produto'

export default function App() {
  return <Produto/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*<View style={styles.container}>
      <Text>Bem vindo!</Text>
      <Image source={Logo}/>
      <StatusBar style="auto" />
    </View>*/

import Produto from './src/telas/Produto'
import { View } from 'react-native'
import {useFonts, RobotoCondensed_300Light, RobotoCondensed_700Bold} from '@expo-google-fonts/roboto-condensed'


export default function App() {
  //Carrega a fonte
  const [fonteCarregada] = useFonts({
    "RobotoCRegular": RobotoCondensed_300Light,
    "RobotoCBold": RobotoCondensed_700Bold,
  })
  //Checa se as fontes já foram carregadas 
  if(!fonteCarregada){
    return <View/>
  }
  return <Produto/>;
}


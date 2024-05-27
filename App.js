import { View } from 'react-native'
import {useFonts, RobotoCondensed_300Light, RobotoCondensed_700Bold} from '@expo-google-fonts/roboto-condensed'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Sobre from './src/telas/sobre/indexSobre'
import IndexCatalogo from './src/telas/catalogo/indexCatalogo'
import CatalogoMock from './src/mocks/catalogo'
import Produto from './src/telas/produtos/index'
import ProdutoMock from './src/mocks/produto'

function MenuKit(){
  return <View>
      <Produto {...ProdutoMock}/>
  </View>
}
function Catalogo(){
  return <View>
    <IndexCatalogo {...CatalogoMock}/>
  </View>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return <Tab.Navigator 
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) =>{
              let iconName;

              if(route.name === "Kit"){
                iconName = focused
                ? 'basket'
                : 'basket-outline';
              } else if (route.name === "Sobre nós"){
                iconName = focused
                ? 'apps'
                : 'apps-outline';
              } else if (route.name === "Produtos"){
                iconName = focused 
                ? 'list'
                : 'list-outline';
              } else if (route.name === "Lista de Desejos"){
                iconName = focused
                ? 'heart'
                : 'heart-outline'
              }

              const navigation = useNavigation(); // Obtém o objeto de navegação

              return (
                <Ionicons 
                  name={iconName} 
                  size={size} 
                  color={color} 
                  onPress={() => {
                    if (route.name === 'Sobre nós') {
                      navigation.navigate('Sobre nós'); 
                    }
                  }}
                />
              );
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true,
          })}
        >
            <Tab.Screen name='Sobre nós'component={Sobre}/>
            <Tab.Screen name='Kit'component={MenuKit}/>
            <Tab.Screen name='Catálogo'component={Catalogo}/>
            <Tab.Screen name='Lista de Desejos'component={MenuKit}/>
          </Tab.Navigator>
}

export default function App() {

  const [fonteCarregada] = useFonts({
    "RobotoCRegular": RobotoCondensed_300Light,
    "RobotoCBold": RobotoCondensed_700Bold,
  })

  if(!fonteCarregada){
    return <View/>
  }
  return <NavigationContainer>
          <TabsMenu />
        </NavigationContainer>;
}
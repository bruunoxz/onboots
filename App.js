import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useFonts, RobotoCondensed_300Light, RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sobre from './src/telas/sobre/indexSobre';
import IndexCatalogo from './src/telas/catalogo/indexCatalogo';
import CatalogoMock from './src/mocks/catalogo';
import Produto from './src/telas/produtos/index';
import ProdutoMock from './src/mocks/produto';
import Contato from './src/telas/contato/indexContato';
import { Audio } from 'expo-av';
import Texto from './src/componentes/Texto';

// Componente do Botão de Áudio
function MenuAudio() {
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/Lugar Distante - A Coleção.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return (
    <TouchableOpacity style={styles.audio} onPress={() => { if (!loading) { setAudioStatus(!audioStatus); } }}>
      <Texto style={styles.texto}>🎧 On/Off</Texto>
    </TouchableOpacity>
  );
}

// Funções das telas
function MenuKit() {
  return <View><Produto {...ProdutoMock} /></View>;
}

function Catalogo() {
  return <View><IndexCatalogo {...CatalogoMock} /></View>;
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Kit') {
            iconName = focused ? 'basket' : 'basket-outline';
          } else if (route.name === 'Sobre nós') {
            iconName = focused ? 'apps' : 'apps-outline';
          } else if (route.name === 'Produtos') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Catálogo') {
            iconName = focused ? 'storefront' : 'storefront-outline';
          } else if (route.name === 'Contato') {
            iconName = focused ? 'mail' : 'mail-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name='Sobre nós' component={Sobre} />
      <Tab.Screen name='Kit' component={MenuKit} />
      <Tab.Screen name='Catálogo' component={Catalogo} />
      <Tab.Screen name='Contato' component={Contato} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fonteCarregada] = useFonts({
    "RobotoCRegular": RobotoCondensed_300Light,
    "RobotoCBold": RobotoCondensed_700Bold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <TabsMenu />
      </NavigationContainer>
      <MenuAudio />
    </View>
  );
}

const styles = StyleSheet.create({
  audio: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
  texto: {
    fontSize: 16,
  },
});
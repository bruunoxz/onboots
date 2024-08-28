import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import Texto from '../../componentes/Texto';

const Contato = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const submit = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos');
      return;
    }
    Alert.alert('Sucesso', 'Sua mensagem foi enviada!');
  };

  useEffect(() => {
    (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
}, []);

const takePicture = async () => {
    if (cameraRef) {
        const photo = await cameraRef.takePictureAsync();
        console.log(photo.uri);
        setImageUri({ uri: photo.uri });
        setIsCameraVisible(false);
    }
};

if (hasPermission === null) {
  return <Text>Solicitando permissão da câmera...</Text>;
}

if (hasPermission === false) {
  return <Text>Sem acesso à câmera</Text>;
}

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        placeholderTextColor="white"
        color="white"
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        placeholderTextColor="white"
        color="white"
      />

<View style={styles.fotoContainer}>
                    <Texto style={styles.texto}>Foto: </Texto>
                    {isCameraVisible ? (
                        <View style={styles.cameraWrapper}>
                            <Camera style={styles.camera} ref={ref => setCameraRef(ref)}>
                                <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
                                    <Text style={styles.bttCamera}>⭕ Tirar Foto</Text>
                                </TouchableOpacity>
                            </Camera>
                        </View>
                    ) : (
                        <>
                            {imageUri ? (
                                <Image source={imageUri} style={styles.profileImage} resizeMode="contain" />
                            ) : (
                                <Texto style={styles.texto}>Nenhuma foto selecionada</Texto>
                            )}
                            <TouchableOpacity onPress={() => setIsCameraVisible(true)}>
                                <Texto style={styles.botaoContato}>📷</Texto>
                            </TouchableOpacity>
                        </>
                    )}
                </View>

  

      <Text style={styles.label}>Mensagem:</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        value={mensagem}
        onChangeText={setMensagem}
        placeholder="Digite sua mensagem"
        multiline
        placeholderTextColor="white"
        color="white"
      />

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top', // Para alinhar o texto no topo do TextInput multiline
  },
  button: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  fotoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  bttCamera: {
    backgroundColor: '#ffffe0',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  cameraWrapper: {
    width: 300,
    height: 250,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  camera: {
    flex: 1,
  },
  cameraButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  profileImage: {
    width: 300,
    height: 250,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Contato;
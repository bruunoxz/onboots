import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import Texto from '../../componentes/Texto';
import axios from 'axios';

const Contato = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [cep, setCep] = useState(''); // Novo estado para o CEP
  const [endereco, setEndereco] = useState(null); // Estado para armazenar o endereço

  const submit = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos');
      return;
    }
    Alert.alert('Sucesso', 'Sua mensagem foi enviada!');
  };

  const buscarCEP = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setEndereco(response.data);
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      alert("CEP inválido ou erro na consulta.");
    }
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

      <Text style={styles.label}>CEP:</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite seu CEP"
        keyboardType="numeric"
        maxLength={8}
        placeholderTextColor="white"
        color="white"
      />
      <TouchableOpacity style={styles.button} onPress={buscarCEP}>
        <Text style={styles.buttonText}>Buscar Endereço</Text>
      </TouchableOpacity>

      {endereco && (
        <View style={styles.enderecoContainer}>
          <Text style={styles.enderecoText}>Rua: {endereco.logradouro}</Text>
          <Text style={styles.enderecoText}>Bairro: {endereco.bairro}</Text>
          <Text style={styles.enderecoText}>Cidade: {endereco.localidade}</Text>
          <Text style={styles.enderecoText}>Estado: {endereco.uf}</Text>
        </View>
      )}

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
  container: { flex: 1, padding: 20, backgroundColor: 'black' },
  label: { fontSize: 16, marginBottom: 8, color: 'white' },
  input: { height: 40, borderColor: 'white', borderWidth: 1, borderRadius: 4, paddingHorizontal: 8, marginBottom: 16 },
  textarea: { height: 100, textAlignVertical: 'top' },
  button: { backgroundColor: 'gray', padding: 15, borderRadius: 4, alignItems: 'center', marginBottom: 16 },
  buttonText: { color: 'white', fontSize: 16 },
  fotoContainer: { marginBottom: 20, alignItems: 'center' },
  enderecoContainer: { marginVertical: 16 },
  enderecoText: { color: 'white', fontSize: 14, marginBottom: 4 },
});

export default Contato;
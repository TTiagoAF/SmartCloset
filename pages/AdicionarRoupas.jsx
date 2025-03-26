import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdicionarRoupas = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [cor, setCor] = useState('');
  const [estado, setEstado] = useState('');

  const apiUrl = 'https://localhost:7006';
  
  
    const handleAddRoupas = async () => {
      const id = await AsyncStorage.getItem("id_conta");
      if (!nome || !marca || !tamanho || !cor || !estado) {
        alert('Preencha todos os campos!');
        return;
      }
    
      const newRoupa = [{
        nome: nome,
        marca: marca,
        tamanho: tamanho,
        cor: cor,
        estado: estado,
        Id_conta: id
      }];
    
      try {
        const response = await fetch(`${apiUrl}/api/Roupas/AddRoupa`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newRoupa),
        });
    
        if (response.ok) {
          navigation.navigate('Home');
          setNome('');
          setMarca('');
          setTamanho('');
          setCor('');
          setEstado('');
        } else {
          const data = await response.json();
          console.log(data.mensagem);
        }
      } catch (error) {
        console.log('Erro ao criar conta. Tente novamente mais tarde');
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Roupa</Text>

      <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Marca" style={styles.input} value={marca} onChangeText={setMarca} />
      <TextInput placeholder="Tamanho" style={styles.input} value={tamanho} onChangeText={setTamanho} />
      <TextInput placeholder="Cor" style={styles.input} value={cor} onChangeText={setCor} />
      <TextInput placeholder="Estado" style={styles.input} value={estado} onChangeText={setEstado} />

      <TouchableOpacity style={styles.button} onPress={handleAddRoupas}>
        <Text style={styles.buttonText}>Salvar Roupa</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdicionarRoupas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

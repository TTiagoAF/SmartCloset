import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PaginaRoupas = () => {
  const navigation = useNavigation();
  const [clothes, setClothes] = useState([]);
  const apiUrl = 'https://localhost:7006';

  const carregarRoupas = async () => {  
    try {
      const token = await AsyncStorage.getItem("token");  
      const id = await AsyncStorage.getItem("id_conta");
    
      const url = `${apiUrl}/api/Roupas/RoupasporIdRoupa/?id=${id}`;
  
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Roupas recebidas:", data);
      setClothes(data);
    } catch (erro) {
      console.error('Erro ao obter roupas:', erro);
    }
  };

  const excluirRoupa = async (idRoupa) => {
    try {
      const token = await AsyncStorage.getItem("token");
  
      const url = `${apiUrl}/api/Roupas/DeleteRoupas`;
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([idRoupa]),
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao excluir roupa: ${response.status}`);
      }
  
      setClothes((prevClothes) => prevClothes.filter((item) => item.id_roupa !== idRoupa));
      Alert.alert('Sucesso', 'Roupa excluída com sucesso!');
    } catch (erro) {
      console.error('Erro ao excluir roupa:', erro);
      Alert.alert('Erro', 'Não foi possível excluir a roupa.');
    }
  };

  useEffect(() => {
    const verificarToken = async () => {
      const token = await AsyncStorage.getItem("token");
  
      console.log("Token carregado:", token);
  
      if (!token) {
        navigation.navigate('Login');
      } else {
        carregarRoupas();
      }
    };
  
    verificarToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Roupas</Text>

      <FlatList
        data={clothes}
        keyExtractor={(item) => item.id_roupa}
        renderItem={({ item }) => (
          <View style={styles.clothesItem}>
            <Text style={styles.clothesText}>Nome: {item.nome}</Text>
            <Text style={styles.clothesText}>Marca: {item.marca}</Text>
            <Text style={styles.clothesText}>Tamanho: {item.tamanho}</Text>
            <Text style={styles.clothesText}>Cor: {item.cor}</Text>
            <Text style={styles.clothesText}>Estado: {item.estado}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => excluirRoupa(item.id_roupa)}
            >
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AdicionarRoupas')}
      >
        <Text style={styles.addButtonText}>+ Adicionar Roupa</Text>
      </TouchableOpacity>
    </View>
  );
};


export default PaginaRoupas;

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
  clothesItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  clothesText: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

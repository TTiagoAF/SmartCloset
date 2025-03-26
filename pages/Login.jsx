import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './LoginStyles';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const apiUrl = 'https://localhost:7006';

  const handleLogin = async () => {
    if (!email || !password) {
      console.log('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/Contas/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          if (data.id != null) {
            await AsyncStorage.setItem('id_conta', JSON.stringify(data.id));
          }
          await AsyncStorage.setItem('token', data.token);
          
          console.log('Bem-vindo!');

          navigation.navigate('Home');
        } else {
            console.log('Token ausente na resposta');
        }
      } else {
        const dataerro = await response.json();
        console.log(dataerro.mensagem);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      console.log('Erro ao fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.loginBox}>
        <View style={styles.logoContainer}>
          <Image source={require('./../assets/LogoCloset.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Welcome back!</Text>

        <View style={styles.inputBox}>
          <FontAwesome name="envelope" size={20} style={styles.icon} />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputBox}>
          <FontAwesome name="lock" size={20} style={styles.icon} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CreateAcount')}>
          <Text style={styles.newAccount}>I don't have an account</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Login;

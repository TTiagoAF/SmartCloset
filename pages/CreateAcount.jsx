import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './CreateAcountStyles';

const CreateAccount = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const apiUrl = 'https://localhost:7006';

  const handleCreateAccount = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('As passwords não coincidem');
      return;
    }
  
    if (!email || !name || !password || !confirmPassword) {
      setErrorMessage('Preencha todos os campos');
      return;
    }
  
    const newAccount = [{
      Email: email,
      Username: name,
      Password: password,
    }];
  
    try {
      const response = await fetch(`${apiUrl}/api/Contas/AddConta`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAccount),
      });
  
      if (response.ok) {
        Alert.alert('Sucesso', 'Conta criada com sucesso');
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigation.navigate('Login');
      } else {
        const data = await response.json();
        setErrorMessage(data.mensagem);
      }
    } catch (error) {
      setErrorMessage('Erro ao criar conta. Tente novamente mais tarde');
    }
  };
  
  

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.createAccountBox}>
        <View style={styles.logoContainer}>
          <Image source={require('./../assets/LogoCloset.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Hello, Welcome!</Text>

        <View style={styles.inputBox}>
          <FontAwesome name="envelope" size={20} style={styles.icon} />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        <View style={styles.inputBox}>
          <FontAwesome name="user" size={20} style={styles.icon} />
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        <View style={styles.inputBox}>
          <FontAwesome name="lock" size={20} style={styles.icon} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>

        <View style={styles.inputBox}>
          <FontAwesome name="lock" size={20} style={styles.icon} />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
          />
        </View>

        {errorMessage ? (
          <Text style={{ color: 'red', textAlign: 'center', marginVertical: 10 }}>
            {errorMessage}
          </Text>
        ) : null}

        <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.haveAccount}>I have an account!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAccount;

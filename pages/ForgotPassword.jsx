import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ForgotPasswordStyles';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const apiUrl = 'https://localhost:7006';

  const handleSubmit = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    const data = { email, newPassword: password };

    try {
      const response = await fetch(`${apiUrl}/api/Contas/ChangePassword`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Senha alterada com sucesso!', [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]);
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', errorData.message || 'Erro ao atualizar a senha.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao conectar com o servidor. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.forgotPasswordBox}>
        <View style={styles.logoContainer}>
          <Image source={require('./../assets/LogoCloset.png')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Change Password</Text>

        <View style={styles.inputBox}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputBox}>
          <TextInput
            placeholder="New Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputBox}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.goBack}>Go back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

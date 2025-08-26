// teste.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

export default function Teste() {
  const [nome, setNome] = useState('');

  const handleEnviar = () => {
    if (!nome.trim()) {
      Alert.alert('Ops!', 'Digite seu nome primeiro.');
      return;
    }
    Alert.alert('Olá!', `Bem-vindo, ${nome}!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Tela de Teste</Text>

        <Text style={styles.label}>Seu nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui..."
          value={nome}
          onChangeText={setNome}
          autoCapitalize="words"
        />

        <Pressable onPress={handleEnviar} style={styles.botao}>
          <Text style={styles.botaoTexto}>Enviar</Text>
        </Pressable>

        <Text style={styles.info}>
          Arquivo: <Text style={styles.mono}>teste.js</Text> • React Native
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F7F7F7' },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  label: { fontSize: 14, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#FFF',
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 12,
    backgroundColor: '#4F46E5',
    marginBottom: 12,
  },
  botaoTexto: { color: '#FFF', fontWeight: '600', fontSize: 16 },
  info: { textAlign: 'center', color: '#666' },
  mono: { fontFamily: 'monospace' },
});

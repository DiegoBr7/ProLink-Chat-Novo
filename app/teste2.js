import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Teste2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Teste2</Text>

      <Pressable
        style={styles.botao}
        onPress={() => alert('Você clicou no botão!')}
      >
        <Text style={styles.botaoTexto}>Clique aqui</Text>
      </Pressable>

      <Pressable
        style={[styles.botao, { backgroundColor: '#16A34A' }]}
        onPress={() => navigation.navigate('Teste')}
      >
        <Text style={styles.botaoTexto}>Ir para Teste.js</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#2563EB',
    borderRadius: 10,
    marginBottom: 12,
  },
  botaoTexto: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});

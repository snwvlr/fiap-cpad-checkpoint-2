import { useState } from 'react';
import { FlatList, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  function adicionarItem() {
    const nome = texto.trim();

    if (!nome) {
      return;
    }

    setItens((listaAtual) => [
      ...listaAtual,
      { id: String(listaAtual.length + 1), nome },
    ]);
    setTexto('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#171717" />
      <Text style={styles.titulo}>Compras para o PC</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma peça"
        placeholderTextColor="#8f8f8f"
        value={texto}
        onChangeText={setTexto}
      />

      <View style={styles.botao}>
        <Button title="Adicionar" onPress={adicionarItem} color="#484848" />
      </View>

      <FlatList
        style={styles.lista}
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{item.nome}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Nenhuma peça na lista.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    paddingHorizontal: 24,
    paddingTop: 64,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f2f2f2',
    marginBottom: 28,
  },
  input: {
    backgroundColor: '#242424',
    borderWidth: 1,
    borderColor: '#3b3b3b',
    borderRadius: 6,
    padding: 14,
    fontSize: 16,
    color: '#f2f2f2',
  },
  botao: {
    marginTop: 12,
  },
  lista: {
    marginTop: 28,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#343434',
    paddingVertical: 16,
  },
  itemTexto: {
    fontSize: 16,
    color: '#e5e5e5',
  },
  listaVazia: {
    color: '#999999',
    textAlign: 'center',
    marginTop: 24,
  },
});

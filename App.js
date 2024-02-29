import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Mensagem from './src/ex2';

export default function App() {
  return (
    <View style={styles.container}>
      <Mensagem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
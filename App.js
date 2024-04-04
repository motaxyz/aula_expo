import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import Mensagem from './src/ex2';
// import Atividade1 from './src/atividade1';
// import Exemplo3 from './src/ex3';
// import Atividade3 from './src/atividade3'
 import Exemplo4 from './src/ex4';
// import Atividade4 from './src/atividade4';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo4 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});
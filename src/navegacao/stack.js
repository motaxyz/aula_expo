import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Exemplos from '../exemplos'
import Exemplo2 from '../ex2'
import Exemplo3 from '../ex3'
import Exemplo4 from '../ex4'
import Exemplo5 from '../ex5'

const Stack = createNativeStackNavigator();
  
  function NavegacaoStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Exemplos" component={Exemplos} />
          <Stack.Screen name="Ex2" component={Exemplo2} />
          <Stack.Screen name="Ex3" component={Exemplo3} />
          <Stack.Screen name="Ex4" component={Exemplo4} />
          <Stack.Screen name="Ex5" component={Exemplo5} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default NavegacaoStack;
import { TextInput } from 'react-native';

import styles from './styles';

 function Input({placeholder, valor, atualizarValor}) {
    return (
        <TextInput 
        style={[styles.input, {outline: 'none'}]}
        placeholder={placeholder}
        placeholderTextColor='lightgray'
        keyboardType='numeric'
        value={valor}
        onChangeText={vlr => atualizarValor(vlr)}
        />
    )
}
 export default Input;
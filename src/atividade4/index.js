import { View, Text, TextInput } from 'react-native';
import styles from "../atividade4/styles";

export default function Exemplo4 () {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.texto}>Texto</Text>

            <TextInput style={styles.input} />

        </View>
    )
}
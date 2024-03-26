import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import styles from './styles'

export default function Exemplo3() {

    const [numero, setNumero] = useState (0);

    function mensagem () {
        alert('Aula de React-Native');
       }

    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <TouchableOpacity style={styles.botao} onPress={() => mensagem()}>
                <Text style={styles.txtBotao}>Botão</Text>
            </TouchableOpacity>
            <Text style={styles.titulo}>{numero}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => incrementar()}>
                <Text style={styles.txtBotao}>Incrementar Número</Text>
            </TouchableOpacity>
        </View>
    );
}
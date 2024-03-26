import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

import styles from './styles'

export default function Exemplo3() {

    const [numero, setNumero] = useState(0);

    function mensagem() {
        alert('Aula de React-Native');
    }

    function incrementar() {
        setNumero(numero + 1)
    }

    function decrementar() {
        setNumero(numero - 1)
    }

    function zerar() {
        setNumero(0)
    }

    return (
        <View style={styles.container}>



            <Text style={styles.titulo}>Atividade 3</Text>

            <Text style={styles.titulodiga}>Selecione um número</Text>

            <View style={styles.box}>
                <View style={styles.operacao}>

                    <TouchableOpacity style={styles.botaomenos} onPress={() => decrementar()}>
                        <Text style={styles.txtBotao}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.mostrarnumero}>{numero}</Text>

                    <TouchableOpacity style={styles.botaomais} onPress={() => incrementar()}>
                        <Text style={styles.txtBotao}>+</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.botao} onPress={() => zerar()}>
                    <Text style={styles.txtBotao}>Zerar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
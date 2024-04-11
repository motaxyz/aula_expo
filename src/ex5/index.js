import { useState } from 'react';

import { View, Touchable, Text, TextInput } from 'react-native';

import styles from './styles';


export default function Exemplo5 () {
    return (
        <View>
            <Text>Exemplo 5</Text>
        </View>
    )
}

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);
    const [n1, setN1] = useState(false);
    const [n2, setN2] = useState(false);
    const [total, setTotal] = useState('');

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
    }

    return (

        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 5</Text>

            <Text style={styles.txtSaida}>Calculadora Básica</Text>

            <Text style={styles.textLabel}> 1º número </Text>

            <TextInput style={
                [
                    styles.txtEntrada,
                        isFocusN1 ?
                            {
                                borderColor: '#C51162',
                                outline: 'none',
                            }
                        :
                            {}
                ]
            }
            onFocus={() => setIsFocusN1(true)}
            onBlur={() => setIsFocusN1(false)}
            onChangeText={(num1) => setN1(num1)}
            value={n1}


        /*<TextInput
            style={
                [
                    styles.txtEntrada,
                        isFocusN2 ?
                            {
                                borderColor: '#C51162',
                                outline: 'none',
                            }
                        :
                            {}
                ]
            }
            onFocus={() => setIsFocusN2(true)}
            onBlur={() => setIsFocusN2(false)}
            onChangeText={(num2) => setN2(num2)}
            value={n2}
        />
    );

    <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

    <Text style={styles.textLabel}>Total</Text>
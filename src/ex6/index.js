import { View, Text } from 'react-native';
import { useState } from 'react'

import Input from './input';
import Botao from './botao';

import styles from './styles'

export default function Exemplo6 (){

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const mensErro = 'Valores inválidos';

    function calculaImc () {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizarValor={setPeso}/>
                <Input placeholder='Altura' valor={altura} atualizarValor={setAltura}/>
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    )
};
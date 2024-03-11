import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import Ola from './ola';

import logo from 'D:/TEMP/matheusmota/mobile/aula_expo/assets/002-1-react-native.png';

const Saudacoes = (props) => {
    return(
        <Text style={{textAlign: 'center'}}>
            Olá {props.name}!
        </Text>
    );
}

export default function Atividade1 () { 
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.imagem}/> 
            <Text style={styles.titulo}>
                Atividade 1
            </Text>
        
            <Saudacoes name='Mario'/>
            <Saudacoes name='Maria'/>
            <Saudacoes name='Bruna'/>
            <Saudacoes name='Bruno'/>


        </View>
    );
}
import { View, Text, TextInput, Pressable } from "react-native";

import styles from "./styles";

export default function Atividade4(){
    

    const [txtDigitado, setTxtDigitado] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');

    function atualizaTextoHandle(txt) {
        setTxtDigitado(txt);
    }

    function exibeTextoHandle(){
        setTxtDigitado(nome, sobrenome);
        setNome('');
        setSobrenome('');
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.texto}>{txtDigitado}</Text>

            <Text style={styles.texto}>Nome</Text>

            <TextInput
                style={styles.input}/>

            <Text style={styles.texto}>Sobrenome</Text>
            <TextInput
                style={styles.input}/>
            
            <Pressable style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
            onPress={() => exibeTextoHandle()}>
                <Text style={styles.txtBotao}>Exibir Texto</Text>
            </Pressable>


        </View>
    )
}


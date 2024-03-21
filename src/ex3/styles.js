import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    botao: {
        width: '70%',
        padding: 10,
        margin: 20,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    txtBotao: {
        fontSize: 25,
    },
});

export default styles;
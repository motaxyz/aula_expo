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

    mostrarnumero: {
        fontSize: 41,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'grey',
        width: '300px',
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'grey',
        width: '300px',
    },

    titulodiga: {
        fontsize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'grey',
        width: '300px',
        height: '30px',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },

    txtBotao: {
        fontSize: 25,
        color: 'white',
    },

    botao: {
        width: '70%',
        padding: 10,
        margin: 25,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    botaomais: {
        width: '50px',
        padding: 10,
        margin: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    botaomenos: {
        width: '50px',
        padding: 10,
        margin: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    box: {
        width: '300px',
        height: '250px',
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#909090',
        padding: 5,
    },

    operacao: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
    
});

export default styles;
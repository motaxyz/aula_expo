import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'pink',
        padding: 8,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#b71c1c',
        margin: 20,
        marginBottom: 40,
    },

    texto: {
        fontSize: 25,
        marginVertical: 10,
        padding: 5,
        color: '#b71c1c',
    },

    input: {
        fontSize: 25,
        width: '80%',
        textAlign: 'center',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
        padding: 5,
    },
})

export default styles;
import { Text } from 'react-native';

import styles from './olaStyles';

export default function Ola ({children}) {
    return  <Text style={styles.txtOla}>Olá {children}</Text>
}
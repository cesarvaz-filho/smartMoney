import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: Colors.white,
    },
    value: {
        fontSize: 28,
        color: Colors.white,
        textAlign: 'center',
    },
    panel: {
        minWidth: 200,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
    },
});
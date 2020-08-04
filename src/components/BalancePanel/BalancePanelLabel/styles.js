import { StyleSheet } from 'react-native';
import Colors from '../../../styles/Colors';

export default StyleSheet.create({
    container: {
        zIndex: 1,
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: Colors.white,
    },
    value: {
        fontSize: 36,
        color: Colors.white,
    },
});
import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    modalItem: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    modalItemText: {
        fontSize: 22,
        color: Colors.white,
        textAlign: 'center',
    },
});
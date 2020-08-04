import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.background,
    },
    formActionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center',
    },
    formContainer: {
        flex: 1,
        paddingVertical: 20,
    },
});
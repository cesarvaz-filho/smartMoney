import { StyleSheet } from 'react-native';
import Colors from '../../../styles/Colors';

export default StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: Colors.asphalt,
        width: 50,
        height: 50,
        marginHorizontal: 3,
    },
    buttonActived: {
        backgroundColor: Colors.blue,
    },
});
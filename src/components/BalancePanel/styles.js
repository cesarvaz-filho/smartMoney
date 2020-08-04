import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
    container: {
        marginBottom: -23,
    },
    panel: {
        //paddingVertical: 10,
    },
    button: {
        backgroundColor: Colors.green,
        borderRadius: 50,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        shadowColor: Colors.black,
        elevation: 5,
        marginTop: -25,
        marginRight: 10,
    },
});
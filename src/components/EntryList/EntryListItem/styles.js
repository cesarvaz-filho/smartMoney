import { StyleSheet } from 'react-native';
import Colors from '../../../styles/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    bullet: {
       
    },
    description: {
        flex: 1,
        justifyContent: 'center',
    },
    descriptionText: {
        fontSize: 14,
        color: Colors.white,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    entryAtIcon: {
        color: Colors.metal,
        marginRight: 3,
    },
    entryAtText: {
        fontSize: 12,
        color: Colors.metal,
    },
    addressIcon: {
        color: Colors.metal,
        marginRight: 3,
        marginLeft: 5,
    },
    addressText: {
        fontSize: 12,
        color: Colors.metal,
    },
    amount: {
        justifyContent: 'center',
    },
    amountText: {
        fontSize: 14,
        color: Colors.white,
        fontWeight: 'bold',
    },
});
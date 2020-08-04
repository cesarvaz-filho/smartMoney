import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        //padding: 10,
    },
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5,
    },
    filterButton: {
        flexDirection: 'row',
        borderColor: Colors.champagneDark,
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
    },
    filterButtonText: {
        color: Colors.champagneDark,
    },
});
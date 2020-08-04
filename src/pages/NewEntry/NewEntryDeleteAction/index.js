import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
import styles from './styles';

const NewEntryDeleteAction = ({entry, onOkPress}) => {
    const onDelete = () => {
        Alert.alert(
            'Apagar?',
            'Você deseja realmente apagar este lançamento?',
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress: () => onOkPress()},
            ],
            {cancelable: false},
        );
    }
    return (
        entry.id && (
            <View>
                <TouchableOpacity style={styles.button} onPress={onDelete}>
                    <Icon name="delete" size={30} color={Colors.white} />
                </TouchableOpacity>
            </View>
        )
    )
}

export default NewEntryDeleteAction;
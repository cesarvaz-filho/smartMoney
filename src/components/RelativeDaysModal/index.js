import React from 'react';
import { Modal, FlatList, TouchableOpacity, Text, View } from 'react-native';
import ActionFooter, { ActionPrimaryButton } from '../Core/ActionFooter';
import styles from './styles';

const RelativeDaysModal = ({ isVisible, onConfirm, onCancel }) => {
    const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={isVisible}
        >
            <View style={styles.modal}>
                <FlatList 
                    data={relativeDays}
                    keyExtractor={item => item.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.modalItem}
                            onPress={() => onConfirm(item)}
                        >
                            <Text style={styles.modalItemText}>{`${item} dias`}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <ActionFooter>
                <ActionPrimaryButton title="Fechar" onPress={onCancel} />
            </ActionFooter>
        </Modal>
    )
}

export default RelativeDaysModal;
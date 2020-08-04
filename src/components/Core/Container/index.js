import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = ({ title, actionLabelText, actionButtonText, onPressActionButton, children }) => {
    return (
        <View style={styles.container}>
            {title && (
                <Text style={styles.title}>{title}</Text>
            )}

            {children}
            
            {(actionLabelText || actionButtonText) && (
                <View style={styles.actionContainer}>
                    {actionLabelText && (
                        <Text style={styles.actionLabel}>{actionLabelText}</Text>
                    )}

                    {actionButtonText && (
                            <TouchableOpacity 
                            style={styles.actionButton}
                            onPress={onPressActionButton}
                        >
                            <Icon name="insert-chart" style={styles.actionButtonIcon} />
                            <Text style={styles.actionButtonText}>{actionButtonText}</Text>
                        </TouchableOpacity>
                    )} 
                </View>
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.asphalt,
        margin: 5,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        padding: 8,
    },
    title: {
        fontSize: 14,
        color: Colors.white,
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    actionLabel: {
        fontSize: 12,
        color: Colors.white,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButtonIcon: {
        color: Colors.white,
        marginRight: 4,
    },
    actionButtonText: {
        fontSize: 12,
        color: Colors.white,
    },
});

export default Container;
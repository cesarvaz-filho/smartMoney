import React from 'react';
import { View, Text } from 'react-native';
import InputMoney from '../../../components/Core/InputMoney';
import styles from './styles';

const WelcomeBalanceInput = ({ value, onChangeValue }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Informe seu saldo</Text>
            <InputMoney value={value} startWithDebit={false} onChangeValue={onChangeValue} />
        </View>
    )
}

export default WelcomeBalanceInput;
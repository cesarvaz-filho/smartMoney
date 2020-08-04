import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
import useBalance from '../../hooks/useBalance';
import Currency from '../Core/Currency';

const BalanceLabel = () => {
    const [ balance ] = useBalance();

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>

            <LinearGradient style={styles.panel} colors={[Colors.violet, Colors.blue]}>
                <Text style={styles.value}>
                    <Currency 
                        value={balance}
                    />
                </Text>
            </LinearGradient>
        </View>
    )
}

export default BalanceLabel;
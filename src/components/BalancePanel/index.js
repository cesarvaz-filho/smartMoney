import React from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import useBalance from '../../hooks/useBalance';

const BalancePanel = () => {
    const [balance] = useBalance();
    const navigation = useNavigation();

    function navigateToNewEntry() {
        navigation.navigate('NewEntry');
    }

    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor={Colors.violet}
            />
            <LinearGradient 
                colors={[Colors.violet, Colors.blue]}
                style={styles.panel}
            >
                <BalancePanelLabel currentBalance={balance} />
                <BalancePanelChart />
            </LinearGradient>
            <TouchableOpacity 
                style={styles.button}
                onPress={navigateToNewEntry}
            >
                <Icon name="add" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    )
}

export default BalancePanel;
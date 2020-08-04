import React, { useState } from 'react';
import { Image, View } from 'react-native';
import ActionFooter, { ActionPrimaryButton } from '../../components/Core/ActionFooter';
import useCategories from '../../hooks/useCategories';
import { saveEntry } from '../../services/Entries';
import { setInitialized } from '../../services/Welcome';
import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';
import Logo from '../../assets/logo-white.png';
import styles from './styles';

const Welcome = ({ navigation }) => {
    const [ , , , initCategories ] = useCategories();
    const [ amount, setAmount ] = useState(0);

    const onSavePress = () => {
        saveEntry({ 
            entryAt: new Date(),
            amount: amount,
            isInit: true,
            category: initCategories,
        });
        setInitialized();
        navigation.navigate('Main');
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={Logo} />
            </View>
            <WelcomeMessage />
            <WelcomeBalanceInput 
                value={amount}
                onChangeValue={setAmount}
            />
            <ActionFooter>
                <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
            </ActionFooter>
        </View>
    )
}

export default Welcome;
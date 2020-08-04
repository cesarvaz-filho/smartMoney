import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Colors from '../../styles/Colors';
import BalanceLabel from '../../components/BalanceLabel';
import useEntries from '../../hooks/useEntries';
import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryAddressPicker from './NewEntryAddressPicker';
import NewEntryCameraPicker from './NewEntryCameraPicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';
import ActionFooter, { ActionPrimaryButton, ActionSecondaryButton } from '../../components/Core/ActionFooter';

const NewEntry = ({ route }) => {
    
    const navigation = useNavigation();
    const entry = route.params?.entry
        ? route.params.entry
        : {
            id: null,
            amount: 0,
            //entryAt: new Date(),
            photo: null,
            address: null,
            latitude: null,
            longitude: null,
            category: {id: null, name: 'Selecione'},
        };
    
    const [ , saveEntry, deleteEntry ] = useEntries();

    const [ debit, setDebit ] = useState(entry.amount <= 0);
    const [ category, setCategory ] = useState(entry.category);
    const [ amount, setAmount ] = useState(entry.amount);
    const [ entryAt, setEntryAt ] = useState(
        entry.entryAt ? new Date(entry.entryAt) : new Date(),
    );
    const [ address, setAddress ] = useState(entry.address);
    const [ photo, setPhoto ] = useState(entry.photo);
    const [ latitude, setLatitude ] = useState(entry.latitude);
    const [ longitude, setLongitude ] = useState(entry.longitude);


    function onClose() {
        navigation.goBack();
    }

    const isValid = () => {
        if (parseFloat(amount) !== 0) {
          return true;
        }
    
        return false;
      };

    const onSave = () => {
        const data = {
            id: entry.id,
            amount: amount,
            category: category,
            photo: photo,
            address: address,
            latitude: latitude,
            longitude: longitude,
            entryAt: entryAt,
        };

        console.log('NewEntry :: save ', data);
        saveEntry(data);
        onClose();
    };

    const onDelete = () => {
        deleteEntry(entry);
        onClose();
    }

    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor={Colors.background}
            />
            <BalanceLabel />

            <View style={styles.formContainer}>
                <NewEntryInput 
                    value={amount} 
                    onChangeValue={setAmount}
                    onChangeDebit={setDebit} 
                />

                <NewEntryCategoryPicker 
                    debit={debit} 
                    category={category} 
                    onChangeCategory={setCategory} 
                />

                <View style={styles.formActionContainer}>
                    <NewEntryDatePicker 
                        value={entryAt} 
                        onChange={setEntryAt} 
                    />
                    <NewEntryCameraPicker
                        photo={photo}
                        onChangePhoto={setPhoto}
                    />

                    <NewEntryAddressPicker 
                        address={address} 
                        onChange={({ latitude, longitude, address }) => {
                            setLatitude(latitude);
                            setLongitude(longitude);
                            setAddress(address);
                        }} 
                    />
                    <NewEntryDeleteAction 
                        entry={entry} 
                        onOkPress={onDelete} 
                    />
                </View>
                
                
            </View>

            <ActionFooter>
                <ActionPrimaryButton 
                    title={entry.id ? 'Salvar' : 'Adicionar'} 
                    onPress={() => {
                        isValid() && onSave();
                    }} 
                />
                <ActionSecondaryButton title="Cancelar" onPress={onClose} />
            </ActionFooter> 
        </View>
    )
}

export default NewEntry;
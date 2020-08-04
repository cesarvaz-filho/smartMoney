import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({ navigation }) => {
    
    return (
        <View style={styles.container}>

            <BalancePanel />
            <FlatList 
                ListHeaderComponent={
                    <EntrySummary />
                }
                ListFooterComponent={
                    <EntryList />
                }
            />
        </View>        
    );
};

export default Main;
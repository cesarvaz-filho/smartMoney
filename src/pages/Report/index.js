import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StatusBar } from 'react-native';
import styles from './styles';
import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import CategoryModal from '../../components/CategoryModal';
import ActionFooter, { ActionPrimaryButton } from '../../components/Core/ActionFooter';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';
//import {Picker} from '@react-native-community/picker';

const Report = () => {
    const [ relativeDaysModalVisible, setRelativeDaysModalVisible ] = useState(false);
    const [ categoryModalVisible, setCategoryModalVisible ] = useState(false);
    const [ relativeDays, setRelativeDays ] = useState(7);
    const [ category, setCategory ] = useState({
        id: null, 
        name: 'Todas categorias'
    });
    const navigation = useNavigation();

    function handleNavigateGoBack() {
        navigation.goBack();
    }

    const onRelativeDaysPress = item => {
        setRelativeDays(item);
        onRelativeDaysClosePress();
    }

    const onCategoryPress = item => {
        setCategory(item);
        onCategoryClosePress();
    }

    const onRelativeDaysClosePress = () => {
        setRelativeDaysModalVisible(false);
    }

    const onCategoryClosePress = item => {
        setCategoryModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor={Colors.background}
            />
            <BalanceLabel />

            <View style={styles.filtersContainer}>
                <TouchableOpacity 
                    style={styles.filterButton}
                    onPress={() => setRelativeDaysModalVisible(true)}
                >
                    <Text style={styles.filterButtonText}>{`Últimos ${relativeDays} dias`}</Text>
                    <Icon name="keyboard-arrow-down" size={20} color={Colors.champagneDark} />
                </TouchableOpacity>
                <RelativeDaysModal
                    isVisible={relativeDaysModalVisible}
                    onConfirm={onRelativeDaysPress}
                    onCancel={onRelativeDaysClosePress}
                />

                <TouchableOpacity 
                    style={styles.filterButton}
                    onPress={() => setCategoryModalVisible(true)}
                >
                    <Text style={styles.filterButtonText}>{category.name}</Text>
                    <Icon name="keyboard-arrow-down" size={20} color={Colors.champagneDark} />
                </TouchableOpacity>
                <CategoryModal
                    categoryType="all"
                    isVisible={categoryModalVisible}
                    onConfirm={onCategoryPress}
                    onCancel={onCategoryClosePress}
                />
            </View>

            <FlatList
                ListHeaderComponent={
                    <EntrySummary />
                }
                ListFooterComponent={
                    <EntryList days={relativeDays} category={category} />
                }
            >  
            </FlatList>

            <ActionFooter>
                <ActionPrimaryButton
                    title="Fechar"
                    onPress={handleNavigateGoBack} 
                />
            </ActionFooter>
        </View>
    )
}

export default Report;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';
import Container from '../Core/Container';
import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';
import { useNavigation } from '@react-navigation/native';

const EntrySummary = ({ days = 7 }) => {
    const navigation = useNavigation();
    const [ balanceSum ] = useBalanceSumByCategory(days);

    return (
        <Container 
            title="Categorias" 
            actionLabelText={`Últimos ${days} dias`} 
            actionButtonText="Ver mais"
            onPressActionButton={() => navigation.navigate('Report')}
        >
            <View style={styles.inner}>
                <EntrySummaryChart data={balanceSum} />
                <EntrySummaryList data={balanceSum} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    inner: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
});

export default EntrySummary;
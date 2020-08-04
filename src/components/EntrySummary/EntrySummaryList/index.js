import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import EntrySummaryListItem from './EntrySummaryListItem';

const EntrySummaryList = ({ data }) => {
    return (
        <FlatList
            style={styles.container}
            data={data}
            keyExtractor={item => item.category.id}
            renderItem={({item}) => <EntrySummaryListItem entry={item} />}
        />
    )
}

export default EntrySummaryList;
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { PieChart } from 'react-native-svg-charts';

const EntrySummaryChart = ({data}) => {
    const chartData = data.map(({category, amount}) => ({
        key: category.id,
        value: amount,
        svg: {
          fill: category.color,
        },
        arc: {
          outerRadius: '100%',
          innerRadius: '80%',
        },
      }));
        
    return (
        <View style={styles.container}>
            <PieChart
                style={styles.chart}
                data={chartData}
            />
        </View>
    )
}

export default EntrySummaryChart;
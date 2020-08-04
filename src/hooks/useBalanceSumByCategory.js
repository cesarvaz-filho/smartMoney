import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getBalanceSumByCategory } from '../services/Balance';

const useBalanceSumyCategory = (days = 7) => {
    const [ balanceSum, setBalanceSum ] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const loadBalanceSumByCategory = async () => {
                const data = await getBalanceSumByCategory();
                setBalanceSum([...data]);
            }
            loadBalanceSumByCategory();
        }, [days])
    );

    return [balanceSum];
}

export default useBalanceSumyCategory;
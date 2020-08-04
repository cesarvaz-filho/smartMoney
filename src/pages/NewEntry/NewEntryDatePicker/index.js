import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
import styles from './styles';

const NewEntryDatePicker = ({ value, onChange }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        onChange(date);
        hideDatePicker();
      };

    return (
        <View>
            <TouchableOpacity 
                style={styles.button}
                onPress={showDatePicker}
            >
                <Icon name="today" size={30} color={Colors.white} />
            </TouchableOpacity>
            
            <DateTimePickerModal 
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                date={value}
            />
        </View>
    )
}

export default NewEntryDatePicker;
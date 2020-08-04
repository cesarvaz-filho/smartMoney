import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
import styles from './styles';
import NewEntryCameraPickerModal from '../NewEntryCameraPickerModal'

const NewEntryCameraPicker = ({ photo, onChangePhoto }) => {
    const [ modalVisible, setModalVisible ] = useState(false);

    const onChangePhotoPress = NewPhoto => {
        onChangePhoto(NewPhoto);
        onClosePress();
    }

    const onDeletePicturePress = () => {
        onChangePhoto(null);
        onClosePress();
    }

    const onClosePress = () => {
        setModalVisible(false);
    }

    return (
        <View>
            <TouchableOpacity 
                style={[styles.button, (photo) ? styles.buttonActived : '']} 
                onPress={() => setModalVisible(true)}
            >
                <Icon name="photo-camera" size={30} color={Colors.white} />
            </TouchableOpacity>
            
            <NewEntryCameraPickerModal
                photo={photo}
                isVisible={modalVisible}
                onChangePhoto={onChangePhotoPress}
                onDelete={onDeletePicturePress}
                onClose={onClosePress}
            /> 
        </View>
    )
}

export default NewEntryCameraPicker;



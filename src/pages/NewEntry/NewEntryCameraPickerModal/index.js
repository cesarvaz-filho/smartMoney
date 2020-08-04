import React, { useState } from 'react';
import { Alert, View, Modal, ImageBackground } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Colors from '../../../styles/Colors';

const NewEntryCameraPickerModal = ({ photo, isVisible, onChangePhoto, onDelete, onClose }) => {
    const [ camera, setCamera ] = useState();

    const onTakePicture = async () => {
        try {
            const { uri } = await camera.takePictureAsync({
                quality: 0.5,
                forceUpOrientation: true,
                fixOrientation: true,
                skipProcessing: true,
            });
            onChangePhoto(uri);
        } catch (error) {
            console.log("NewEntryCameraPickerModal :: onTakePicture error on takePicture.", error);
            Alert.alert('Erro', 'Houve erro ao tirar foto.');
        }
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isVisible}
            >

                {photo ? (
                    <ImageBackground 
                        source={{ uri: photo }} 
                        style={styles.imagePreview}
                    >
                        <View style={styles.pictureButtonActions}>
                            <Icon 
                                name="delete" 
                                size={50} 
                                color={Colors.white} 
                                onPress={onDelete} 
                                style={styles.buttonClose} 
                            />
                            <Icon 
                                name="check" 
                                size={50} 
                                color={Colors.white} 
                                onPress={onClose} 
                                style={styles.buttonCheck} 
                            />
                        </View>
                    </ImageBackground>
                ) : (
                    <RNCamera
                        ref={ref => setCamera(ref)}
                        style={styles.camera}
                        type={RNCamera.Constants.Type.back}
                        autoFocus={RNCamera.Constants.AutoFocus.on}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permissão para usar câmera.',
                            message: 'Precisamos da sua permissão para usar a câmera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancelar'
                        }}
                        captureAudio={false}
                    >
                        <Icon 
                            name="photo-camera" 
                            size={40} 
                            color={Colors.white} 
                            onPress={onTakePicture} 
                            style={styles.buttonTakePicture} 
                        />
                        <Icon 
                            name="close" 
                            size={40} 
                            color={Colors.white} 
                            onPress={onClose} 
                            style={styles.buttonDeletePicture} 
                        />
                    </RNCamera>
                )}

                
            </Modal>
        </View>
    )
}

export default NewEntryCameraPickerModal;

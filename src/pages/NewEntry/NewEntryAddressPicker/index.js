import React from 'react';
import { Alert, View, TouchableOpacity, PermissionsAndroid } from 'react-native';
import styles from './styles';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
import { onChange } from 'react-native-reanimated';

const NewEntryAddresPicker = ({ address, onChange }) => {  
    const getLocation = (latitude, longitude) => {
        Geocoder.init('AIzaSyDp6-EKMsuMyFA4qCG_cFq1MRN3Pg8CqEg');
    
        Geocoder.from({ latitude, longitude })
            .then(json => {
                const formattedAddress = json.results[0].formatted_address;
                Alert.alert("Localização", formattedAddress, [
                    {
                        text: 'Cancelar',
                        onPress: () => {},
                        style: 'cancel'
                    },
                    {
                        text: 'Confirmar',
                        onPress: () => {onChange({
                            latitude: latitude,
                            longitude: longitude,
                            address: formattedAddress
                        })},
                    }
                ]);
            })
            .catch(error => {
                console.error("NewEntryAddresPicker :: getLocation :: erro ao recuperar a localização ", error);
                Alert.alert("Houve um error ao recuperar a sua localização. Verifique se o GPS está ativado.");
            });
    }
    
    const getPosition = () => {
        Geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            getLocation(latitude, longitude);
    
        }, error => {
            console.error("NewEntryAddresPicker :: getPosttion :: erro ao recuperar a posição ", error);
            Alert.alert("Houve um error ao recuperar a sua localização. Verifique se o GPS está ativado.");
        });
    }
    
    const onButtonPress = () => {
        if(address) {
            Alert.alert("Localização", address, [
                {
                    text: 'Apagar',
                    onPress: () => {
                        onChange({
                            latitude: null,
                            longitude: null,
                            address: null,
                        });
                    },
                },
                {
                    text: 'Cancelar',
                    style: 'cancel',
                }
            ]);
        } else {
            getPosition();
        }
    }

    return (
        <View>
            <TouchableOpacity 
                style={[styles.button, address ? styles.buttonActived : '']}
                onPress={onButtonPress}
            >
                <Icon name="person-pin" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    )
}

export default NewEntryAddresPicker;
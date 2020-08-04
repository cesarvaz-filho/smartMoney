import { Alert } from 'react-native';
import { getRealm } from './Realm';
import {getUUID} from '../services/UUID';
import moment from '../vendors/moment';

export const getEntries = async (days, category) => {
    let realm = await getRealm();
  
    realm = realm.objects('Entry');
  
    if (days > 0) {
      const date = moment()
        .subtract(days, 'days')
        .toDate();
  
      console.log('getEntries :: days ', days);
  
      realm = realm.filtered('entryAt >= $0', date);
    }
  
    if (category && category.id) {
      console.log('getEntries :: category ', JSON.stringify(category));
  
      realm = realm.filtered('category.id == $0', category);
    }
  
    const entries = realm.sorted('entryAt', true);
  
    console.log('getEntries :: entries ', JSON.stringify(entries));
  
    return entries;
};

export const saveEntry = async (entry) => {
    const realm = await getRealm();
    let data = {};
  
    try {
      const category = realm
        .objects('Category')
        .filtered('id == $0', entry.category.id)[0];

      realm.write(() => {
        data = {
          id: entry.id || getUUID(),
          amount: entry.amount || 0,
          entryAt: entry.entryAt,
          description: entry.category.name,
          photo: entry.photo,
          address: entry.address,
          latitude: entry.latitude,
          longitude: entry.longitude,
          isInit: entry.isInit || false,
          category: category,
        };
  
        realm.create('Entry', data, true);
      });
  
      console.log('saveEntry :: data: ', JSON.stringify(entry));
    } catch (error) {
      console.error('saveEntry :: error on save object: ', JSON.stringify(data));
      Alert.alert('Erro ao salvar os dados de lançamento.');
    }
  
    return data;
  };

export const deleteEntry = async entry => {
    const realm = await getRealm();
  
    try {
      const entryRealmObject = realm
        .objects('Entry')
        .filtered('id == $0', entry.id)[0];
        
      realm.write(() => {
        realm.delete(entryRealmObject);
      });
    } catch (error) {
      console.error(
        'deleteEntry :: error on delete object: ',
        JSON.stringify(entry),
      );
      Alert.alert('Erro ao excluir este lançamento.');
    }
};
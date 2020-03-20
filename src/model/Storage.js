import React from 'react';
import DefaultPreference from 'react-native-default-preference';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

class AppStorage extends React.Component{

    constructor(props){
        super(props);
    }

    setData_pre = (key,value) => {
        DefaultPreference.set('key', 'value').then(function() {console.log('Added in Default Preference')});
    }

    static getData_pre = (key) =>{
        DefaultPreference.get('key').then(function(value) {console.log(value)});
    }

    storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,
   
    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage
   
    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: null,
  });
   
    setData_str = (key,value) => {
        storage.save({
            key: key, // Note: Do not use underscore("_") in key!
            data: value,
        });
    }
    
    getData_str = (key) =>{
        storage.load({
            key: key
        }).then(ret => {
        // found data go to then()
            console.log(ret.userid);
        })
    }
    
    _storeData = async (key,val) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(val));
        } catch (error) {
            // Error saving data
        }
    };

    static _retrieveData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
            // We have data!!
            console.log("The value of key "+ key + " is "+value);
            return value;
            }
        } catch (error) {
            // Error retrieving data
        }
    };

}

export default AppStorage;

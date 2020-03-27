import React, {Component} from 'react';
import DefaultPreference from 'react-native-default-preference'


/* This component is for storing data in local storage */

export default class Storage extends Component{
    /* key value should be string for example: 'Packet:1',
    to use return value of this function, call then() by return object 
    for example: var Getvalue = GetData(key);
                    Getvalue.then(function(value) {console.log(value)});

    Note: SetData.then() will return null value */
    
    //to get data by key
    static GetData = (key) => {
        return DefaultPreference.get(key);  
    }

    // to store data(key.value) locally
    static SetData = (key, value) => {
        return DefaultPreference.set(key, value);
    }

}
import React, {useState} from 'react';
import { apiCall } from '../common/ApiCaller';

//Vishakha - function to do a post call and store the result in default preference
function AppConfig(postUrl, postParam, preferenceName, keyName) {
    const [appData, setAppData] = useState({});

    apiCall(postUrl, postParam)
    .then(response => {
        setAppData(response); //setting the json reponse in state of the function
    });

    //include Default Preference code here to set preference name and corresponding key name

    console.log("App data is "+JSON.stringify(appData));
    return JSON.stringify(appData);

}

export default AppConfig;
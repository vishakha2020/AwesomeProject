import React from 'react';
import AppStorage from "../model/Storage";

function LogModule(logKey, logValue, logValueType){
	if(logKey != null && logValue != null){
		logValue = validateData(logValue, logValueType);
		Obj = new AppStorage();
		Obj._storeData(logKey, logValue);
		return logValue;
	}	
}

function validateData(dataToValidate, dataType){
	if(dataType == 'string'){
		if(typeof dataToValidate == 'string') {
			return dataToValidate;
		} else {
			return JSON.stringify(dataToValidate);
		}
	} else if(dataType == 'object'){
		if(typeof dataToValidate == 'object') {
			return dataToValidate;
		} else {
			return JSON.parse(dataToValidate);
		}
	} else {
		return JSON.stringify(dataToValidate);
	}
}

export default LogModule;
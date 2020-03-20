import React from 'react';
//import GetDataPref from "../model/Storage";
//import  getData_str from "../model/Storage";
import { SetDataPref } from "../model/Storage";
//import setData_str from "../model/Storage";

function LogModule(logKey, logValue, logValueType){
	if(logKey != null && logValue != null){
		logValue = validateData(logValue, logValueType);
		//return logValue;
		return SetDataPref(logKey, logValue);
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
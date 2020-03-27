/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import GetState from "./src/components/GetState";
import LogModule from "./src/components/Log";
import AppStorage from "./src/model/Storage";
import { apiCall } from "./src/common/ApiCaller";
import DefaultPreference from 'react-native-default-preference'
import AppConfig from './src/components/AppConfig';

function App (){

  var inputData = {
    0 : "738097725498,PERIODIC,37.32689395,-122.02685541,3.42,IGN_ON,49,,637175797.6805,,,,,,,,10,,gps",
    1: "738097725498,PERIODIC,37.32736552,-122.02684942,5.1,IGN_ON,50,,637175813.67904,,,,,,,,10,,gps",
    2: "738097725498,PERIODIC,37.32746542,-122.01972558,50.37,IGN_ON,91,,637176377.76122,,,,,,,,10,,gps",
    3: "738097725498,PERIODIC,37.32701219,-122.01972909,55.34,IGN_ON,92,,637176391.85442,,,,,,,,10,,gps",
    4: "738097725498,PERIODIC,37.32655865,-122.01976278,0,IGN_ON,93,,637176404.83804,,,,,,,,10,,gps",
    5: "738097725498,PERIODIC,37.3261052,-122.01973702,3.50,IGN_ON,94,,637176418.74622,,,,,,,,10,,gps",
    6: "738097725498,PERIODIC,37.32563464,-122.01972943,0,IGN_ON,95,,637176431.76022,,,,,,,,10,,gps",
    7: "738097725498,PERIODIC,37.32515997,-122.01973828,0,IGN_ON,96,,637176445.75428,,,,,,,,5,,gps",
    8: "738097725498,PERIODIC,37.32469057,-122.01971305,0,IGN_ON,97,,637176469.75323,,,,,,,,5,,gps",
    9: "738097725498,PERIODIC,37.32470957,-122.02029078,3.27,IGN_ON,98,,637176476.85693,,,,,,,,10,,gps",
    10: "738097725498,PERIODIC,37.32470383,-122.0208769,5.02,IGN_ON,99,,637176489.85236,,,,,,,,5,,gps",
    11: "738097725498,PERIODIC,37.32473856,-122.02146999,3.19,IGN_ON,100,,637176505.84044,,,,,,,,10,,gps"
  }
  
  let i = 0;
  var str = inputData[0];
  var prev = str.split(',');
  var stateData = {state: "StandStill", time: prev[8], speed: prev[4], latitude: prev[2], longitude:prev[3]};

  //Vishakha - React hook to execute code in intervals
  // useEffect(() => {
  //   const timestamp = setInterval(() => {
  //     let data = GetState(stateData, inputData[i]);
  //     let done = JSON.stringify(LogModule("Packet"+i, data, 'object'));
  //     //console.log("Log Module value is "+ done);
  //     // AppStorage._retrieveData("Packet"+i).then(function(value){
  //     //   let dt = new Date(value.time);
  //     //   dt = dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
  //     //   console.log(dt+":Drive State changes to "+value.state+" at location "+value.latitude+" and "+value.longitude);
  //     // });
  //     Promise.resolve(AppStorage._retrieveData("Packet"+i)).then(function(value){
  //       value = JSON.parse(value);        
  //       //console.log(value.time);
  //       // let dt = new Date(value.time);
  //       // dt = dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
  //       console.log(value.time+":Drive State changes to "+value.state.toUpperCase()+" at location "+value.latitude+" and "+value.longitude);
  //     });
      
  //     i++;
  //   },1000);
  //   return () => {
  //     if(i == 11){
        
  //       clearInterval(timestamp);
  //     }
  //   }
  // },[]);


    //Vishakha - following code is on how to call a generic function for api call and store in default pref.
    let postParam = {
        mobile_uuid: '104744259663407', 
        fcm_token: 'APA91bFlK9mIL5_aD3VEeiENwhKZGahEEnLvbTuuwTQZsCHNzVdkVU8bCPmd8S8XiYFzOIs8kD4OafjLx87_BLXb45Z8HDPkFk0FQNjUPZTjhZQt_aEh9C4'
    };

    let url = 'http://api.zoblite.com/zoblite_api/is_asset_registered';

    //AppConfig(url,postParam, "App_Configurations", 'app_config');

    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
      </>
    );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

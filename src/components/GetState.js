import React from 'react';

function GetState(stateData, currData){
  var curr = currData.split(',');
  var speed = parseInt(curr[4]);
  console.log("speed: " + speed);
  var time = curr[8];
  var outputData = {state: stateData.state,time: stateData.time};
  if(stateData.state === "StandStill"){
    if(speed >=  5 && speed <= 30){
      // SnapshotAtSpeed();
      outputData.state = "Rolling";
      outputData.time = time;
    }
    else if(speed > 30)
    {
      outputData.state = "Driving";
      outputData.time = time;
    }
  }
  else if(stateData.state === "Rolling"){
    if(detectDriving(stateData, currData)){
      outputData.state = "Driving";
      outputData.time = time;
    }
    else if(speed <= 5){
      outputData.state = "StandStill";
      outputData.time = time;
    }
  }
  else if(stateData.state === "Driving"){
    if(speed ===  0){
      // SnapshotAtNoSpeed();
      outputData.state = "Stopping";
      outputData.time = time;
    }
  }
  else if(stateData.state === "Stopping"){
    if(detectEnd(stateData.time, time)  && speed === 0){
      outputData.state = "StandStill";
      outputData.time = time;
    }
    else if(speed > 0){
      outputData.state = "Driving";
      outputData.time = time;
    }
  }
  return outputData;
}

function detectDriving(stateData, currData){
  var curr = currData.split(',');
  var speed = parseInt(curr[4]);
  var time = curr[8];
  if(speed >= 50)
    return true;
  var timediff = time - stateData.time;
  if(timediff > 120)
    return true;

}

function detectEnd(stateTime, currTime){
  var timeDiff = currTime - stateTime;
  if(timeDiff >= 60)
    return true;
  else
    return false;
}



export default GetState;
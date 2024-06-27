"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 6) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  if (currentState === "green"){
    trafficLight.state = "orange";
  } else if (currentState === "orange"){
    trafficLight.state = "red";
  } else if (currentState === "red"){
    trafficLight.state = "green";
  }
  rotations++;
}

  


/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/

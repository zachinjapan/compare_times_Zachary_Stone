const timesAreValid = require("./helpers");

const checkIfTimeIsInRange = (currentTime, startTime, endTime) => {
  //-----------------------------------------------------
  // 1. check inputs
  //-----------------------------------------------------
  if (!timesAreValid(currentTime, startTime, endTime)) {
    // throw error if inputs are not valid
    throw new Error("time inputs are invalid");
  }
  //-----------------------------------------------------
  // 2. compare times
  //-----------------------------------------------------
  if (startTime === endTime) {
    return true;
  }

  if (startTime < endTime) {
    return currentTime >= startTime && currentTime < endTime;
  }

  if (startTime > endTime) {
    return currentTime >= startTime || currentTime < endTime;
  }

  throw new Error("An error has occured. Please check inputs");
};

module.exports = checkIfTimeIsInRange;

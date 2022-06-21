const timesAreValid = (currentTime, startTime, endTime) => {
  const times = [currentTime, startTime, endTime];

  for (let x = 0; x < times.length; x++) {
    // outside of 24 hour range
    if (times[x] > 23 || times[x] < 0) {
      // console.log("time inputs are not possible");
      return false;
    }

    // only hours (no minutes or seconds)
    if (times[x].toString().length > 2) {
      // console.log("please enter time in hours");
      return false;
    }
  }

  return true;
};

module.exports = timesAreValid;

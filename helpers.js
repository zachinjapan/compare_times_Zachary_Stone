const timesAreValid = (currentTime, startTime, endTime) => {
  const times = [currentTime, startTime, endTime];

  for (let x = 0; x < times.length; x++) {
    // not a number
    if (/\D/gm.test(times[x])) {
      return false;
    }
    // outside of 24 hour range
    if (times[x] > 23 || times[x] < 0) {
      return false;
    }
  }

  return true;
};

module.exports = timesAreValid;

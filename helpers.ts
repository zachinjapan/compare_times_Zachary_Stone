export const timesAreValid = (
  currentTime: number,
  startTime: number,
  endTime: number
): Boolean => {
  const times = [currentTime, startTime, endTime];

  for (let x = 0; x < times.length; x++) {
    // outside of 24 hour range
    if (times[x] > 23 || times[x] < 0) {
      return false;
    }
  }

  return true;
};

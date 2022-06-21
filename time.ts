import { timesAreValid } from "./helpers";

export const checkIfTimeIsInRange = (
  currentTime: number,
  startTime: number,
  endTime: number
): boolean => {
  // 1. check inputs

  if (!timesAreValid(currentTime, startTime, endTime)) {
    throw new Error("time inputs are invalid");
  }

  // 2. compare times

  if (startTime === endTime) {
    //　例えば、午前6時から次の午前6時の間ということなら、いつでもtrueじゃないですか？間違ったら、すみません。
    return true;
  }

  if (startTime < endTime) {
    // 例えば、６時から８時の間です。
    return currentTime >= startTime && currentTime < endTime;
  }

  if (startTime > endTime) {
    //例えば、１０時から次の日の４時の間です。
    return currentTime >= startTime || currentTime < endTime;
  }

  throw new Error("An error has occured. Please check inputs");
};

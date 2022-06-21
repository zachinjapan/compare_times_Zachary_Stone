## How to Run

1. Download Repo

2. `npm i`

3. `npm run test`

# Description

## The current time is compared to the start and end time 

`` time.ts ``

```

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


```

## The helper fuction timesAreValid makes handles validation of the inputs

``helpers.ts ``

```export const timesAreValid = (
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
```

## The entire app is written in Typescript and has unit tests with Jest

``time.test.ts``

```
import { checkIfTimeIsInRange } from "./time";

describe("inputs are correctly validated", () => {
  it("-3, 4, 0 =>  error", () => {
    expect(() => {
      checkIfTimeIsInRange(-3, 4, 0);
    }).toThrow(new Error("time inputs are invalid"));
  }),
    it("24, 0, 0 => error", () => {
      expect(() => {
        checkIfTimeIsInRange(24, 0, 0);
      }).toThrow(new Error("time inputs are invalid"));
    }),
    it("23, 0, 25 => error", () => {
      expect(() => {
        checkIfTimeIsInRange(23, 0, 25);
      }).toThrow(new Error("time inputs are invalid"));
    });
});

describe("times are correctly compared", () => {
  it("14, 12, 12 => true", () => {
    expect(checkIfTimeIsInRange(12, 12, 12)).toBe(true);
  }),
    it("12, 10, 20 => true", () => {
      expect(checkIfTimeIsInRange(12, 10, 20)).toBe(true);
    }),
    it("12, 10, 12 => false", () => {
      expect(checkIfTimeIsInRange(12, 10, 12)).toBe(false);
    }),
    it("12, 18, 2 => false", () => {
      expect(checkIfTimeIsInRange(12, 18, 20)).toBe(false);
    }),
    it("5, 20, 10 => true", () => {
      expect(checkIfTimeIsInRange(5, 20, 10)).toBe(true);
    }),
    it("5, 23, 4 => false", () => {
      expect(checkIfTimeIsInRange(5, 23, 4)).toBe(false);
    });
});
```

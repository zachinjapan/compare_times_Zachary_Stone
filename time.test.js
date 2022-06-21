const checkIfTimeIsInRange = require("./time");

describe("inputs are correctly validated", () => {
  it("three, japan, 23 =>  error", () => {
    expect(() => {
      checkIfTimeIsInRange("three", "japan", 23);
    }).toThrow(new Error("time inputs are invalid"));
  }),
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

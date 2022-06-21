const checkIfTimeIsInRange = require("./time");

describe("inputs are correctly validated", () => {
  it("-3, 4, 0 =>  error", () => {
    expect(() => {
      checkIfTimeIsInRange(-3, 4, 0);
    }).toThrow();
  });

  it("24, 0, 0 => error", () => {
    expect(() => {
      checkIfTimeIsInRange(24, 0, 0);
    }).toThrow();
  }),
    it("'12:43:42', 10, 0 => error", () => {
      expect(() => {
        checkIfTimeIsInRange("12:43:42", 10, 0);
      }).toThrow();
    });
});

describe("times are correctly compared", () => {
  it("12, 12, 12 => true", () => {
    expect(checkIfTimeIsInRange(12, 12, 12)).toBe(true);
  }),
    it("12, 10, 20 => true", () => {
      expect(checkIfTimeIsInRange(12, 10, 20)).toBe(true);
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

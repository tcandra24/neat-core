import { describe, it, expect } from "vitest";
import { uniqueBy } from "../../src/array/uniqueBy";

describe("uniqueBy", () => {
  it("should return unique objects based on a string key", () => {
    const input = [
      { id: 1, category: "A" },
      { id: 2, category: "B" },
      { id: 3, category: "A" },
    ];
    const expected = [
      { id: 1, category: "A" },
      { id: 2, category: "B" },
    ];
    expect(uniqueBy(input, "category")).toEqual(expected);
  });

  it("should return unique objects based on a number key", () => {
    const input = [
      { id: 1, category: "A", price: 100 },
      { id: 2, category: "B", price: 200 },
      { id: 3, category: "A", price: 150 },
      { id: 4, category: "C", price: 100 },
    ];
    const expected = [
      { id: 1, category: "A", price: 100 },
      { id: 2, category: "B", price: 200 },
      { id: 3, category: "A", price: 150 },
    ];
    expect(uniqueBy(input, "price")).toEqual(expected);
  });
});

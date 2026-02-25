import { describe, it, expect } from "vitest";
import { groupBy } from "../../src/array/groupBy";

describe("group by", () => {
  it("should group objects by a string key", () => {
    const input = [
      { id: 1, category: "A" },
      { id: 2, category: "B" },
      { id: 3, category: "A" },
    ];
    const expected = {
      A: [
        { id: 1, category: "A" },
        { id: 3, category: "A" },
      ],
      B: [{ id: 2, category: "B" }],
    };
    expect(groupBy(input, "category")).toEqual(expected);
  });

  it("should group objects by a number key", () => {
    const input = [
      { id: 1, category: "A", price: 100 },
      { id: 2, category: "B", price: 200 },
      { id: 3, category: "A", price: 150 },
    ];
    const expected = {
      A: [
        { id: 1, category: "A", price: 100 },
        { id: 3, category: "A", price: 150 },
      ],
      B: [{ id: 2, category: "B", price: 200 }],
    };
    expect(groupBy(input, "category")).toEqual(expected);
  });
});

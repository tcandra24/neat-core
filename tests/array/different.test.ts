import { describe, it, expect } from "vitest";
import { difference } from "../../src/array/difference";

describe("difference", () => {
  it("should return the difference between two arrays", () => {
    const array = [1, 2, 3, 4, 5];
    const values = [2, 4];
    const result = difference(array, values);
    expect(result).toEqual([1, 3, 5]);
  });

  it("should return an empty array if there are no differences", () => {
    const array = [1, 2, 3];
    const values = [1, 2, 3];
    const result = difference(array, values);
    expect(result).toEqual([]);
  });

  it("should handle arrays with different types", () => {
    const array = [1, "2", 3];
    const values = [2, 3];
    const result = difference(array, values);
    expect(result).toEqual([1, "2"]);
  });
});

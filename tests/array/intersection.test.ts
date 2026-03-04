import { describe, it, expect } from "vitest";
import { intersection } from "../../src/array/intersection";

describe("intersection", () => {
  it("should return the intersection of two arrays", () => {
    const array = [1, 2, 3, 4, 5];
    const values = [2, 4];
    const result = intersection(array, values);
    expect(result).toEqual([2, 4]);
  });

  it("should return an empty array if there are no intersections", () => {
    const array = [1, 2, 3];
    const values = [4, 5, 6];
    const result = intersection(array, values);
    expect(result).toEqual([]);
  });

  it("should handle arrays with different types", () => {
    const array = [1, "2", 3];
    const values = [2, 3];
    const result = intersection(array, values);
    expect(result).toEqual([3]);
  });
});

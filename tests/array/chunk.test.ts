import { describe, it, expect } from "vitest";
import { chunk } from "../../src/array/chunk";

describe("chunk", () => {
  it("should split an array into chunks of a specified size of 2", () => {
    const result = chunk([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("should split an array into chunks of a specified size of 3", () => {
    const result = chunk([1, 2, 3, 4, 5], 3);
    expect(result).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  it("should handle arrays smaller than the chunk size", () => {
    const result = chunk([1], 2);
    expect(result).toEqual([[1]]);
  });

  it("should return an empty array for an empty input array", () => {
    const result = chunk([], 2);
    expect(result).toEqual([]);
  });
});

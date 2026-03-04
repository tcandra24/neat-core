import { describe, it, expect } from "vitest";
import { sortBy } from "../../src/array/sortBy";

describe("sortBy", () => {
  it("should sort an array of numbers ascending", () => {
    const array = [5, 3, 8, 1, 2];
    const result = sortBy(array, (a) => a);
    expect(result).toEqual([1, 2, 3, 5, 8]);
  });

  it("should sort an array of numbers descending", () => {
    const array = [5, 3, 8, 1, 2];
    const result = sortBy(array, (a) => a, "desc");
    expect(result).toEqual([8, 5, 3, 2, 1]);
  });

  it("should sort an array of strings ascending", () => {
    const array = ["banana", "apple", "cherry"];
    const result = sortBy(array, (data) => data);
    expect(result).toEqual(["apple", "banana", "cherry"]);
  });

  it("should sort an array of strings descending", () => {
    const array = ["banana", "apple", "cherry"];
    const result = sortBy(array, (data) => data, "desc");
    expect(result).toEqual(["cherry", "banana", "apple"]);
  });

  it("should sort an array of objects by a specific key ascending", () => {
    const array = [
      { id: 3, name: "Charlie" },
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const result = sortBy(array, (item) => item.id);
    expect(result).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ]);
  });

  it("should sort an array of objects by a specific key descending", () => {
    const array = [
      { id: 3, name: "Charlie" },
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const result = sortBy(array, (item) => item.id, "desc");
    expect(result).toEqual([
      { id: 3, name: "Charlie" },
      { id: 2, name: "Bob" },
      { id: 1, name: "Alice" },
    ]);
  });
});

import { describe, it, expect } from "vitest";
import { unique } from "../src/array/unique";

describe("unique", () => {
  it("removes duplicate values", () => {
    expect(unique([1, 1, 2])).toEqual([1, 2]);
  });

  it("works with strings", () => {
    expect(unique(["a", "a", "b"])).toEqual(["a", "b"]);
  });
});

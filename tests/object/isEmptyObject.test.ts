import { describe, it, expect } from "vitest";
import { isEmptyObject } from "../../src/object/isEmptyObject";

describe("isEmptyObject", () => {
  it("should return true for empty objects", () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it("should return false for non-empty objects", () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });
});

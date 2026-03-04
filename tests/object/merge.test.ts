import { describe, it, expect } from "vitest";
import { merge } from "../../src/object/merge";

describe("merge", () => {
  it("should merge two objects", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const result = merge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it("should merge multiple objects", () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    const result = merge(obj1, obj2, obj3);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it("should overwrite properties from previous objects", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const obj3 = { a: 5 };
    const result = merge(obj1, obj2, obj3);
    expect(result).toEqual({ a: 5, b: 3, c: 4 });
  });
});

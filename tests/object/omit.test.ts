import { describe, it, expect } from "vitest";
import { omit } from "../../src/object/omit";

describe("omit", () => {
  it("should omit the specified keys from an object", () => {
    const input = { a: 1, b: 2, c: 3 };
    const expected = { b: 2 };
    expect(omit(input, ["a", "c"])).toEqual(expected);
  });

  it("should return the original object if no keys are specified", () => {
    const input = { a: 1, b: 2, c: 3 };
    expect(omit(input, [])).toEqual(input);
  });

  it("should return an empty object", () => {
    const input = { a: 1, b: 2, c: 3 };
    expect(omit(input, ["a", "b", "c"])).toEqual({});
  });
});

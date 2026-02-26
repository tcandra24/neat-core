import { describe, it, expect } from "vitest";
import { pick } from "../../src/object/pick";

describe("pick", () => {
  it("should pick the specified keys from an object", () => {
    const input = { a: 1, b: 2, c: 3 };
    const expected = { a: 1, c: 3 };
    expect(pick(input, ["a", "c"])).toEqual(expected);
  });

  it("should return an empty object if no keys are specified", () => {
    const input = { a: 1, b: 2, c: 3 };
    expect(pick(input, [])).toEqual({});
  });

  it("should return an empty object if no input are specified", () => {
    const input = {};
    expect(pick(input, [])).toEqual({});
  });

  it("should return an specified key from an object that key not found", () => {
    const input = { a: 1, b: 2, c: 3 };
    expect(pick(input, ["d"])).toEqual({});
  });
});

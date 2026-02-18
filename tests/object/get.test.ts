import { describe, it, expect } from "vitest";
import { get } from "../../src/object/get";

describe("get", () => {
  it("should get a value at a specific path", () => {
    const obj = { a: { b: { c: 42 } } };
    expect(get(obj, "a.b.c")).toBe(42);
  });

  it("should return undefined for non-existent paths", () => {
    const obj = { a: { b: { c: 42 } } };
    expect(get(obj, "a.b.d")).toBeUndefined();
  });

  it("should return the default value for non-existent paths", () => {
    const obj = { a: { b: { c: 42 } } };
    expect(get(obj, "a.b.d", "default")).toBe("default");
  });

  it("sould return the default value of specific path", () => {
    const obj = {
      a: {
        b: {
          b1: 1,
        },
        c: {
          d: 123,
        },
      },
    };

    expect(get(obj, "a.c.d")).toBe(123);
  });

  it("sould return the default value of undefined value", () => {
    const obj = {
      a: {
        b: {
          b1: undefined,
        },
        c: {
          d: 123,
        },
      },
    };

    expect(get(obj, "a.b.b1", 0)).toBe(0);
  });

  it("sould return the default value of null value", () => {
    const obj = {
      a: {
        b: {
          b1: null,
        },
        c: {
          d: 123,
        },
      },
    };

    expect(get(obj, "a.b.b1", 0)).toBe(null);
  });
});

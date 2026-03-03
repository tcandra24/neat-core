import { describe, it, expect } from "vitest";
import { toSnakeCase } from "../../src/string/toSnakeCase";

describe("toSnakeCase", () => {
  it("should return value converted to snake-case", () => {
    const result = toSnakeCase("helloWorld");
    expect(result).toBe("hello_world");
  });

  it("should return value converted to snake-case with whitespace", () => {
    const result = toSnakeCase("Hello World");
    expect(result).toBe("hello_world");
  });

  it("should return value converted to snake-case with underscore", () => {
    const result = toSnakeCase("Hello_World");
    expect(result).toBe("hello_world");
  });

  it("should return value of empty string", () => {
    const result = toSnakeCase("");
    expect(result).toBe("");
  });
});

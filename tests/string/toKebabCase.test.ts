import { describe, it, expect } from "vitest";
import { toKebabCase } from "../../src/string/toKebabCase";

describe("toKebabCase", () => {
  it("should return value converted to kebab-case", () => {
    const result = toKebabCase("helloWorld");
    expect(result).toBe("hello-world");
  });

  it("should return value converted to kebab-case with whitespace", () => {
    const result = toKebabCase("Hello World");
    expect(result).toBe("hello-world");
  });

  it("should return value converted to kebab-case with underscore", () => {
    const result = toKebabCase("Hello_World");
    expect(result).toBe("hello-world");
  });

  it("should return value of empty string", () => {
    const result = toKebabCase("");
    expect(result).toBe("");
  });
});

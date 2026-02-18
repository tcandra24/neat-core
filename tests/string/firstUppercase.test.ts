import { describe, it, expect } from "vitest";
import { firstUppercase } from "../../src/string/firstUppercase";

describe("firstUppercase", () => {
  it("capitalize each word", () => {
    expect(firstUppercase("hello world")).toBe("Hello World");
  });

  it("capitalize each word with whitespace", () => {
    expect(firstUppercase(" hello world ")).toBe("Hello World");
  });

  it("capitalize empty word", () => {
    expect(firstUppercase("")).toBe("");
  });

  it("capitalize empty word with whitespace", () => {
    expect(firstUppercase("         ")).toBe("");
  });
});

import { describe, it, expect } from "vitest";
import { capitalizeWords } from "../../src/string/capitalizeWords";

describe("capitalizeWords", () => {
  it("capitalize each word", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  it("capitalize each word with whitespace", () => {
    expect(capitalizeWords(" hello world ")).toBe("Hello World");
  });

  it("capitalize empty word", () => {
    expect(capitalizeWords("")).toBe("");
  });

  it("capitalize empty word with whitespace", () => {
    expect(capitalizeWords("         ")).toBe("");
  });
});

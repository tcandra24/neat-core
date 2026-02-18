import { describe, it, expect } from "vitest";
import { capitalize } from "../../src/string/capitalize";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should not change an already capitalized string", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("should handle empty strings", () => {
    expect(capitalize("")).toBe("");
  });
});

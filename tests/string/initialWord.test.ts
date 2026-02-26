import { describe, it, expect } from "vitest";
import { initialWords } from "../../src/string/initialWords";

describe("initial words", () => {
  it("should show only first letter and capitalize the letter of a string", () => {
    expect(initialWords("hello world")).toEqual("H W");
  });

  it("should show only first long letter and capitalize the letter of a string", () => {
    expect(initialWords("hello world in this area")).toEqual("H W I T A");
  });

  it("should show only first long random letter and capitalize the letter of a string", () => {
    expect(initialWords("helLo wOrld in tHis area")).toEqual("H W I T A");
  });

  it("should handle empty strings", () => {
    expect(initialWords("")).toEqual("");
  });
});

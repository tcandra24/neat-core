import { describe, it, expect } from "vitest";
import { truncate } from "../../src/string/truncate";

describe("truncate", () => {
  it("should truncate a long string", () => {
    const result = truncate("Hello, world!", 5);
    expect(result).toBe("Hello...");
  });

  it("should not truncate a short string", () => {
    const result = truncate("Hi", 5);
    expect(result).toBe("Hi");
  });

  it("should allow custom suffix", () => {
    const result = truncate("Hello, world!", 5, "!!!");
    expect(result).toBe("Hello!!!");
  });

  it("should return empty string", () => {
    const result = truncate("", 5);
    expect(result).toBe("");
  });
});

import { describe, it, expect } from "vitest";
import { slugify } from "../../src/string/slugify";

describe("slugify", () => {
  it("should slugify a string", () => {
    const result = slugify("Hello, world!");
    expect(result).toBe("hello-world");
  });

  it("should handle empty string", () => {
    const result = slugify("");
    expect(result).toBe("");
  });

  it("should remove special characters", () => {
    const result = slugify("Hello@To&World!");
    expect(result).toBe("hello-to-world");
  });

  it("should replace spaces with hyphens", () => {
    const result = slugify("Hello World");
    expect(result).toBe("hello-world");
  });

  it("should convert non-latin characters", () => {
    const result = slugify("Héllo Wörld");
    expect(result).toBe("hello-world");
  });
});

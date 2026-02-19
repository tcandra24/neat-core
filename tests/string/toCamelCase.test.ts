import { describe, it, expect } from "vitest";
import { toCamelCase } from "../../src/string/toCamelCase";

describe("toCamelCase", () => {
  it("should convert a hyphenated string to camelCase", () => {
    const result = toCamelCase("hello-world");
    expect(result).toBe("helloWorld");
  });

  it("should convert a snake_case string to camelCase", () => {
    const result = toCamelCase("hello_world");
    expect(result).toBe("helloWorld");
  });

  it("should convert a spaced string to camelCase", () => {
    const result = toCamelCase("hello world");
    expect(result).toBe("helloWorld");
  });

  it("should handle an already camelCase string", () => {
    const result = toCamelCase("helloWorld");
    expect(result).toBe("helloWorld");
  });

  it("should return an empty string for an empty input", () => {
    const result = toCamelCase("");
    expect(result).toBe("");
  });

  it("should return a converting camelCase string from random input", () => {
    const result = toCamelCase("hello_worldToPeople_that-buildThisWorld");
    expect(result).toBe("helloWorldToPeopleThatBuildThisWorld");
  });

  it("should return a converting camelCase string from random input with dot", () => {
    const result = toCamelCase("hello.worldToPeople.that-buildThisWorld");
    expect(result).toBe("helloWorldToPeopleThatBuildThisWorld");
  });

  it("should return a converting camelCase string from random input with symbol", () => {
    const result = toCamelCase("hello#worldToPeople@that&buildThis*world");
    expect(result).toBe("helloWorldToPeopleThatBuildThisWorld");
  });
});

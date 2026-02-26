import { describe, it, expect } from "vitest";
import { tryCatch } from "../../src/function/tryCatch";

describe("tryCatch", () => {
  it("should return the result if the promise resolves", async () => {
    const [error, result] = await tryCatch(Promise.resolve("success"));
    expect(error).toBeNull();
    expect(result).toEqual("success");
  });

  it("should return the error if the promise rejects", async () => {
    const [error, result] = await tryCatch(Promise.reject(new Error("failure")));
    expect(error).toBeInstanceOf(Error);
    expect(result).toBeNull();
  });
});

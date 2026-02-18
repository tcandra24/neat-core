import { describe, it, expect, vi } from "vitest";
import { debounce } from "../../src/function/debounce";

describe("debounce", () => {
  it("should debounce a function", () => {
    vi.useFakeTimers();

    const fn = vi.fn();
    const debounced = debounce(fn, 200);
    debounced();
    expect(fn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(200);
    expect(fn).toHaveBeenCalled();
  });
});

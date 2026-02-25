/**
 * Remove duplicate values from an array based on a specific key.
 *
 * @typeParam T - Array element type.
 * @typeParam K - Key type (must be string | number | symbol).
 * @param array - The source array.
 * @param key - The key to determine uniqueness.
 * @returns A new array with unique values based on the specified key.
 *
 * @example
 * ```ts
 * uniqueBy([{ id: 1 }, { id: 2 }, { id: 1 }], "id");
 * // [{ id: 1 }, { id: 2 }]
 * ```
 */
export function uniqueBy<T, K extends keyof T>(array: readonly T[], key: K): T[] {
  const seen = new Set<T[K]>();

  return array.filter((item) => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

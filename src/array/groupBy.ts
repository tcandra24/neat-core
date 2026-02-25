/**
 * Group array items by a specific key.
 *
 * @typeParam T - Array element type.
 * @typeParam K - Key type (must be string | number | symbol).
 * @param array - The source array.
 * @param key - The key to group by.
 * @returns An object where keys are group identifiers and values are arrays of grouped items.
 *
 * @example
 * ```ts
 * groupBy([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 1, name: "Charlie" }], "id");
 * // {
 * //   1: [{ id: 1, name: "Alice" }, { id: 1, name: "Charlie" }],
 * //   2: [{ id: 2, name: "Bob" }]
 * // }
 * ```
 */
export function groupBy<T, K extends keyof T>(array: readonly T[], key: K): Record<string, T[]> {
  return array.reduce(
    (acc, item) => {
      const groupKey = String(item[key]);

      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }

      acc[groupKey].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );
}

/**
 * Split an array into smaller arrays (chunks) of a given size.
 *
 * Does not mutate the original array.
 *
 * @typeParam T - Array element type.
 * @param array - The source array.
 * @param size - The size of each chunk. Must be greater than 0.
 *
 * @returns A new array containing chunked subarrays.
 *
 * @example
 * ```ts
 * chunk([1, 2, 3, 4, 5], 2);
 * // [[1, 2], [3, 4], [5]]
 * ```
 *
 * @throws If size is less than 1.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [];

  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

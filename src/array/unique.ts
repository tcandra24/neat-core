/**
 * Remove duplicate values from an array.
 *
 * Uses strict equality comparison.
 * Does not mutate the original array.
 *
 * @typeParam T - Array element type.
 * @param array - The source array.
 *
 * @returns A new array with unique values.
 *
 * @example
 * ```ts
 * unique([1, 1, 2, 3]);
 * // [1, 2, 3]
 * ```
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

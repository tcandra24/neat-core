/**
 * Computes the difference between two arrays.
 * @param array The original array.
 * @param values The array of values to exclude from the original array.
 * @returns A new array containing the values from the original array that are not in the values array.
 */
export function difference<T>(array: T[], values: T[]): T[] {
  const set = new Set(values);
  return array.filter((item) => !set.has(item));
}

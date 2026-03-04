/**
 * Computes the intersection between two arrays.
 * @param array The original array.
 * @param values The array of values to include from the original array.
 * @returns A new array containing the values from the original array that are also in the values array.
 */
export function intersection<T>(array: T[], values: T[]): T[] {
  const set = new Set(values);
  return array.filter((item) => set.has(item));
}

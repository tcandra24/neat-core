/**
 * Create a new object by omitting specified keys from the source object.
 *
 * @param obj - The source object.
 * @param keys - The keys to omit.
 * @returns A new object without the omitted keys.
 */
export function omit<T, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K> {
  const result = { ...obj };

  for (const key of keys) {
    delete result[key];
  }

  return result;
}

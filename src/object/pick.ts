/**
 * Create a new object by picking specified keys from the source object.
 *
 * @param obj - The source object.
 * @param keys - The keys to pick.
 * @returns A new object with only the picked keys.
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;

  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

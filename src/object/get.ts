/**
 * Get a nested property value from an object.
 *
 * @param obj - The source object.
 * @param path - The dot-separated path to the property.
 * @param defaultValue - The default value to return if the property is not found.
 * @returns The value of the property or the default value.
 */
export function get(obj: any, path: string, defaultValue?: any) {
  const keys = path.split(".");
  let result = obj;

  for (const key of keys) {
    if (result == null) return defaultValue;
    result = result[key];
  }

  return result === undefined ? defaultValue : result;
}

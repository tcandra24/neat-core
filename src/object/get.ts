export function get(obj: any, path: string, defaultValue?: any) {
  const keys = path.split(".");
  let result = obj;

  for (const key of keys) {
    if (result == null) return defaultValue;
    result = result[key];
  }

  return result === undefined ? defaultValue : result;
}

export function uniqueBy<T, K extends keyof T>(array: readonly T[], key: K): T[] {
  const seen = new Set<T[K]>();

  return array.filter((item) => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

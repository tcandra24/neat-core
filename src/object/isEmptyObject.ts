export function isEmptyObject(obj: Record<PropertyKey, unknown>): boolean {
  return Object.keys(obj).length === 0;
}

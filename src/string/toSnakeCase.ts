/**
 * Convert a string to snake case.
 *
 * @param str - The input string.
 * @returns The input string converted to snake case.
 */
export function toSnakeCase(str: string): string {
  if (!str) return "";

  return str
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[_\s]+/g, "_")
    .toLowerCase();
}

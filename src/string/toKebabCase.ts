/**
 * Convert a string to kebab case.
 *
 * @param str - The input string.
 * @returns The input string converted to kebab case.
 */
export function toKebabCase(str: string): string {
  if (!str) return "";

  return str
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}

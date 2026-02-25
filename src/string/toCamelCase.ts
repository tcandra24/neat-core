/**
 * Convert a string to camel case.
 *
 * @param str - The input string.
 * @returns The input string converted to camel case.
 */
export function toCamelCase(str: string): string {
  if (!str) return "";

  return str
    .trim()
    .replace(/[^a-zA-Z0-9]+(.)?/g, (_, char: string) => (char ? char.toUpperCase() : ""))
    .replace(/^(.)/, (match) => match.toLowerCase());
}

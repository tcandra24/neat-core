/**
 * Capitalize the first letter of each word in a string.
 *
 * @param str - The input string.
 * @returns The input string with the only show first letter of each word capitalized.
 */
export function initialWords(str: string): string {
  if (!str) return "";
  return str
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase())
    .join(" ");
}

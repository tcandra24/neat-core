/**
 * Capitalize the first letter of each word in a string.
 *
 * @param str - The input string.
 * @returns The input string with the first letter of each word capitalized.
 */
export function capitalizeWords(str: string): string {
  if (!str) return "";
  return str
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

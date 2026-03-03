/**
 * Convert a long string to truncate string.
 *
 * @param value - The input string.
 * @param maxLength - Length on string to truncate
 * @param suffix - The string to append at the end of the truncated string
 * @returns The input string converted to truncate string.
 */
export function truncate(value: string, maxLength: number, suffix = "..."): string {
  if (value.length <= maxLength) return value;
  return value.slice(0, maxLength).trimEnd() + suffix;
}

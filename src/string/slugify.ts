/**
 * Convert a string to a URL-friendly slug.
 *
 * @param value - The input string.
 * @returns The slugified string.
 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

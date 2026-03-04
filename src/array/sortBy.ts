/**
 * Sorts an array of objects by a specified property.
 * @param array The array to sort.
 * @param selector A function that selects the property to sort by.
 * @returns A new array sorted by the specified property.
 */
export function sortBy<T>(array: T[], selector: (item: T) => string | number, direction: "asc" | "desc" = "asc"): T[] {
  return [...array].sort((a, b) => {
    const aValue = selector(a);
    const bValue = selector(b);

    if (aValue < bValue) return direction === "asc" ? -1 : 1;
    if (aValue > bValue) return direction === "asc" ? 1 : -1;
    return 0;
  });
}

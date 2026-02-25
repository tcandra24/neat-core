/**
 * Debounce a function.
 *
 * @param fn - The function to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns A debounced version of the input function.
 */
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

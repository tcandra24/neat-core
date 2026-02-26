/**
 * Tries to execute a promise and catches any errors that occur.
 *
 * @param promise - The promise to execute.
 * @returns A tuple containing either an error or the result.
 */
export async function tryCatch<T>(input: Promise<T>): Promise<TryCatchResult<T>>;

export async function tryCatch<T>(input: () => Promise<T>): Promise<TryCatchResult<T>>;

export async function tryCatch<T>(input: Promise<T> | (() => Promise<T>)): Promise<TryCatchResult<T>> {
  try {
    const result = typeof input === "function" ? await input() : await input;

    return [null, result];
  } catch (error) {
    return [error as Error, null];
  }
}

export type TryCatchResult<T> = [Error | null, T | null];

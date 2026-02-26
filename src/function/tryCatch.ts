/**
 * Tries to execute a promise and catches any errors that occur.
 *
 * @param promise - The promise to execute.
 * @returns A tuple containing either an error or the result.
 */
export async function tryCatch<T>(promise: Promise<T>): Promise<TryCatchResult<T>> {
  try {
    const result = await promise;
    return [null, result];
  } catch (error) {
    return [error as Error, null];
  }
}

export type TryCatchResult<T> = [Error | null, T | null];

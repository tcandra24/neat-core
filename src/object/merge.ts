/**
 * Merges multiple objects into one.
 * @param objects The objects to merge.
 * @returns A new object containing the merged properties.
 */
export function merge<T extends object[]>(...objects: T): UnionToIntersection<T[number]> {
  return objects.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {}) as any;
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

# NeatCore -- API Design Guideline & Usage

## 1. Purpose

NeatCore is a zero-dependency utility library for TypeScript that focuses on:

- Strong typing
- Pure & predictable functions
- Immutable by default
- Consistent API design

NeatCore is not a replacement for all utility libraries.
NeatCore is a stable foundation for neat engineering.

---

# 2. Core Principles

## 2.1 Pure Function Only

- Does not change parameters
- Has no side effects
- Does not access global state
- Output is always deterministic

## 2.2 Immutable by Default

Input is never modified.

```ts
import { unique } from "@titocandradev/neatcore";

const arr = [1, 2, 2, 3];
const result = unique(arr);

console.log(arr);
// tetap [1, 2, 2, 3]
```

## 2.3 Strong Typing First

- Don't use `any`
- Use generics when necessary
- Maintain input types

---

# 3. Folder Structure

    array/
    string/
    object/
    function/

---

# 4. Array Utilities

## unique

```ts
import { unique } from "@titocandradev/neatcore";

unique([1, 1, 2, 3]);
// [1, 2, 3]
```

## uniqueBy

```ts
import { uniqueBy } from "@titocandradev/neatcore";

uniqueBy(
  [
    { id: 1, name: "A" },
    { id: 1, name: "B" },
  ],
  (item) => item.id,
);

// [{ id: 1, name: "A" }]
```

## groupBy

```ts
import { groupBy } from "@titocandradev/neatcore";

groupBy(["apple", "banana", "apricot"], (item) => item[0]);
```

## chunk

```ts
import { chunk } from "@titocandradev/neatcore";

chunk([1, 2, 3, 4, 5], 2);
// [[1,2],[3,4],[5]]
```

## difference

```ts
import { difference } from "@titocandradev/neatcore";

const array = [1, 2, 3, 4, 5];
const values = [2, 4];
const result = difference(array, values);
// [1, 3, 5]
```

## intersection

```ts
import { intersection } from "@titocandradev/neatcore";

const array = [1, 2, 3, 4, 5];
const values = [2, 4];
const result = intersection(array, values);
// [2, 4]
```

## sortBy

```ts
import { intersection } from "@titocandradev/neatcore";

const array = [5, 3, 8, 1, 2];
const result = sortBy(array, (a) => a);
// [1, 2, 3, 5, 8]

const array = [
  { id: 3, name: "Charlie" },
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const result = sortBy(array, (item) => item.id);
// [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ]

const array = [
  { id: 3, name: "Charlie" },
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const result = sortBy(array, (item) => item.id, "desc");
// [
//   { id: 3, name: "Charlie" },
//   { id: 2, name: "Bob" },
//   { id: 1, name: "Alice" },
// ]
```

---

# 5. String Utilities

## capitalize

```ts
import { capitalize } from "@titocandradev/neatcore";

capitalize("neatcore");
// "Neatcore"
```

## capitalizeWords

```ts
import { capitalizeWords } from "@titocandradev/neatcore";

capitalizeWords("hello world");
// "Hello World"
```

## toCamelCase

```ts
import { toCamelCase } from "@titocandradev/neatcore";

toCamelCase("hello-world_test");
// "helloWorldTest"
```

## toKebabCase

```ts
import { toKebabCase } from "@titocandradev/neatcore";

toKebabCase("helloWorldTest");
// "hello-world-test"
```

## initialWords

```ts
import { initialWords } from "@titocandradev/neatcore";

initialWords("hello world");
// "H W"
```

## truncate

```ts
import { truncate } from "@titocandradev/truncate";

truncate("Hello, world!", 5);
// "Hello..."

truncate("Hello, world!", 5, "!!!");
// "Hello!!!"
```

## slugify

```ts
import { slugify } from "@titocandradev/slugify";

slugify("Hello World");
// "hello-world"
```

## toSnakeCase

```ts
import { toSnakeCase } from "@titocandradev/toSnakeCase";

toSnakeCase("Hello World");
// "hello_world"
```

---

# 6. Object Utilities

## get

```ts
import { get } from "@titocandradev/neatcore";

get(
  {
    a: {
      b: {
        b1: "Hello",
      },
      c: {
        d: "Hello World",
      },
    },
  },
  "a.c.d",
);
// Hello World
```

## pick

```ts
import { pick } from "@titocandradev/neatcore";

pick({ id: 1, name: "A", age: 20 }, ["id", "name"]);
// { id: 1, name: "A" }
```

## omit

```ts
import { omit } from "@titocandradev/neatcore";

omit({ id: 1, name: "A", age: 20 }, ["age"]);
// { id: 1, name: "A" }
```

## isEmptyObject

```ts
import { isEmptyObject } from "@titocandradev/neatcore";

isEmptyObject({});
// true
```

## merge

```ts
import { merge } from "@titocandradev/neatcore";

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const result = merge(obj1, obj2, obj3);
// { a: 1, b: 2, c: 3 }
```

---

# 7. Function Utilities

## debounce

```ts
import { debounce } from "@titocandradev/neatcore";

const debounced = debounce(() => {
  console.log("Callback Called");
}, 200);

debounced();
```

## tryCatch

```ts
import { tryCatch } from "@titocandradev/neatcore";

const [error, result] = await tryCatch(fetch("https://jsonplaceholder.typicode.com/users"));
// or
const [error, result] = await tryCatch(async () => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP error");
  return res.json();
});
```

---

# 8. Versioning Policy

- Patch → bug fix\
- Minor → new utility\
- Major → breaking change

NeatCore tries to avoid breaking changes.

---

# 9. Final Principle

NeatCore isn't about the number of utilities.
NeatCore is about utilities that are:

- Consistent
- Secure
- Type-safe
- Production-ready

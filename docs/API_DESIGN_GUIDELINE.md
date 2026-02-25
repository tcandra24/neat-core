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
import { unique } from "neatcore";

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
import { unique } from "neatcore";

unique([1, 1, 2, 3]);
// [1, 2, 3]
```

## uniqueBy

```ts
import { uniqueBy } from "neatcore";

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
import { groupBy } from "neatcore";

groupBy(["apple", "banana", "apricot"], (item) => item[0]);
```

## chunk

```ts
import { chunk } from "neatcore";

chunk([1, 2, 3, 4, 5], 2);
// [[1,2],[3,4],[5]]
```

---

# 5. String Utilities

## capitalize

```ts
import { capitalize } from "neatcore";

capitalize("neatcore");
// "Neatcore"
```

## capitalizeWords

```ts
import { capitalizeWords } from "neatcore";

capitalizeWords("hello world");
// "Hello World"
```

## toCamelCase

```ts
import { toCamelCase } from "neatcore";

toCamelCase("hello-world_test");
// "helloWorldTest"
```

## toKebabCase

```ts
import { toKebabCase } from "neatcore";

toKebabCase("helloWorldTest");
// "hello-world-test"
```

---

# 6. Object Utilities

## get

```ts
import { get } from "neatcore";

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
import { pick } from "neatcore";

pick({ id: 1, name: "A", age: 20 }, ["id", "name"]);
// { id: 1, name: "A" }
```

## omit

```ts
import { omit } from "neatcore";

omit({ id: 1, name: "A", age: 20 }, ["age"]);
// { id: 1, name: "A" }
```

## isEmptyObject

```ts
import { isEmptyObject } from "neatcore";

isEmptyObject({});
// true
```

---

# 7. Function Utilities

## debounce

```ts
import { debounce } from "neatcore";

const debounced = debounce(() => {
  console.log("Callback Called");
}, 200);

debounced();
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

# NeatCore -- API Design Guideline & Usage

## 1. Purpose

NeatCore adalah zero-dependency utility library untuk TypeScript yang
berfokus pada:

- Strong typing
- Pure & predictable function
- Immutable by default
- Konsistensi desain API

NeatCore bukan pengganti semua utility library.\
NeatCore adalah foundation yang stabil untuk engineering yang rapi.

---

# 2. Core Principles

## 2.1 Pure Function Only

- Tidak mengubah parameter
- Tidak memiliki side-effect
- Tidak mengakses global state
- Output selalu deterministik

## 2.2 Immutable by Default

Input tidak pernah dimodifikasi.

```ts
import { unique } from "neatcore";

const arr = [1, 2, 2, 3];
const result = unique(arr);

console.log(arr);
// tetap [1, 2, 2, 3]
```

## 2.3 Strong Typing First

- Tidak menggunakan `any`
- Menggunakan generic jika perlu
- Menjaga tipe input

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
- Minor → utility baru\
- Major → breaking change

NeatCore berusaha menghindari breaking change.

---

# 9. Final Principle

NeatCore bukan tentang banyaknya utility.\
NeatCore tentang utility yang:

- Konsisten\
- Aman\
- Type-safe\
- Production-ready

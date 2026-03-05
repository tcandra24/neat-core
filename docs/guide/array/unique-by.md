---
title: Unique By
description: Remove duplicate values from an array based on a specific key
---

# Unique By

`uniqueBy` is a function to return an array that remove duplicate values from an array based on a specific key.

## Example

This function removes all matching values ​​based on a specific key or property from an array of objects:

```ts
import { uniqueBy } from "@titocandradev/neatcore";

const input = [
  { id: 1, category: "A" },
  { id: 2, category: "B" },
  { id: 3, category: "A" },
];
const result = uniqueBy(input, "category");
// [
//   { id: 1, category: "A" },
//   { id: 2, category: "B" },
// ]
```

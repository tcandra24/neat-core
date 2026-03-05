---
title: Group By
description: Group array items by a specific key
---

# Group By

`groupBy` is a function to return an object that group array items by a specific key.

## Example

This function groups an array of objects based on a specific key or selected property:

```ts
import { groupBy } from "@titocandradev/neatcore";

const input = [
  { id: 1, category: "A" },
  { id: 2, category: "B" },
  { id: 3, category: "A" },
];
const result = groupBy(input, "category");
// {
//   A: [
//     { id: 1, category: "A" },
//     { id: 3, category: "A" },
//   ],
//   B: [{ id: 2, category: "B" }],
// }
```

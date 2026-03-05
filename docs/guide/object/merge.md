---
title: Merge
description: Merges multiple objects into one.
---

# Merge

`merge` is a function merges multiple objects into one.

## Example

This function combines many objects into 1 object without being limited to the number of objects combined:

```ts
import { merge } from "@titocandradev/neatcore";

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const result = merge(obj1, obj2, obj3);
```

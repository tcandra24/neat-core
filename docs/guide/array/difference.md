---
title: Difference
description: Returns values from the first array that are not included in the second array.
---

# Difference

`difference` is a function to retrieve values ​​from the first array that are **not contained** in the second array.

## Example

This function is useful when you want to compare two arrays and get the unique values ​​from the first array:

```ts
import { difference } from "@titocandradev/neatcore";

const array = [1, 2, 3, 4, 5];
const values = [2, 4];
const result = difference(array, values);
// [1, 3, 5]
```

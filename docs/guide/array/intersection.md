---
title: Intersection
description: Computes the intersection between two arrays
---

# Intersection

`intersection` is a function to return an array that computes the intersection between two arrays.

## Example

This function selects the same values ​​or elements from two given arrays:

```ts
import { intersection } from "@titocandradev/neatcore";

const array = [1, 2, 3, 4, 5];
const values = [2, 4];
const result = intersection(array, values);
expect(result).toEqual([2, 4]);
// [2, 4]
```

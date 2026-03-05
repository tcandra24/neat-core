---
title: Chunk
description: Split an array into smaller arrays (chunks) of a given size
---

# Chunk

`chunk` is a function to return an array into smaller arrays (chunks) of a given size.

## Example

This function is useful if you want to separate 1 array into several arrays according to the given size:

```ts
import { chunk } from "@titocandradev/neatcore";

const result = chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]
```

---
title: Is Empty Object
description: Check if an object is empty.
---

# Is Empty Object

`isEmptyObject` is a function tries to check if an object is empty.

## Example

This function will check whether the object has properties or is empty:

```ts
import { isEmptyObject } from "@titocandradev/neatcore";

const object = {};
if (isEmptyObject(object)) {
  // Object is Empty
} else {
  // Object is Not Empty
}
```

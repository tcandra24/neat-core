---
title: Get
outline: deep
description: Get a nested property value from an object
---

# Get

`get` is a function to get a nested property value from an object.

## Example

This function will get the value of the selected property, the default value can be obtained if it is defined when calling the function:

### Regular Array

```ts
import { get } from "@titocandradev/neatcore";

const obj = { a: { b: { c: 42 } } };
const result = get(obj, "a.b.c");
// 42
```

### Regular Array with Default Value

```ts
import { get } from "@titocandradev/neatcore";

const obj = { a: { b: { c: 42 } } };
const result = get(obj, "a.b.d", 0);
// 0
```

---
title: Omit
description: Create a new object by omitting specified keys from the source object.
---

# Omit

`omit` is a function create a new object by omitting specified keys from the source object.

## Example

This function will remove properties that have been specified in the array parameter containing the name of the property:

```ts
import { omit } from "@titocandradev/neatcore";

const result = omit({ id: 1, name: "John Doe", age: 20 }, ["age"]);
// { id: 1, name: "A" }
```

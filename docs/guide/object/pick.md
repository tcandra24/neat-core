---
title: Pick
description: Create a new object by picking specified keys from the source object.
---

# Pick

`pick` is a function create a new object by picking specified keys from the source object.

## Example

This function will take only the same property as the array parameter containing the property name:

```ts
import { pick } from "@titocandradev/neatcore";

const result = pick({ id: 1, name: "A", age: 20 }, ["id", "name"]);
// { id: 1, name: "A" }
```

---
title: Sort By
outline: deep
description: Sorts an array of objects by a specified property
---

# Sort By

`sortBy` is a function to return an array that sorts an array of objects by a specified property.

## Example

This function sorts a regular array or an array of objects by entering the selected property:

### Regular Array

```ts
import { sortBy } from "@titocandradev/neatcore";

const array = [5, 3, 8, 1, 2];
const result = sortBy(array, (a) => a);
// [1, 2, 3, 5, 8]
```

### Regular Array (Descending)

```ts
import { sortBy } from "@titocandradev/neatcore";

const array = [5, 3, 8, 1, 2];
const result = sortBy(array, (a) => a, "desc");
// [8, 5, 3, 2, 1]
```

### Array of Object

```ts
import { sortBy } from "@titocandradev/neatcore";
const array = [
  { id: 3, name: "Charlie" },
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const result = sortBy(array, (item) => item.id);
// [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ]
```

### Array of Object (Descending)

```ts
import { sortBy } from "@titocandradev/neatcore";
const array = [
  { id: 3, name: "Charlie" },
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const result = sortBy(array, (item) => item.id, "desc");
// [
//   { id: 3, name: "Charlie" },
//   { id: 2, name: "Bob" },
//   { id: 1, name: "Alice" },
// ]
```

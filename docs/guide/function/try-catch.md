---
title: Try Catch
description: Tries to execute a promise and catches any errors that occur.
---

# Try Catch

`tryCatch` is a function tries to execute a promise and catches any errors that occur.

## Example

This function will execute a promise and will catch errors if an error occurs then return the result and the error inside of array:

```ts
import { tryCatch } from "@titocandradev/neatcore";

const [error, result] = await tryCatch(fetch("https://jsonplaceholder.typicode.com/users"));
// or
const [error, result] = await tryCatch(async () => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP error");
  return res.json();
});
```

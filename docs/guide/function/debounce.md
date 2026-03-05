---
title: Debounce
description: Debounce a function with specific delay time in milisecond
---

# Debounce

`debounce` is a function to debounce a function with specific delay time in milisecond.

## Example

This function will perform the debounce method on a function, this function can be used if a delay is needed when calling the API endpoint:

```ts
import { debounce } from "@titocandradev/neatcore";

const debounced = debounce(() => {
  console.log("Callback Called");
}, 200);

debounced();
```

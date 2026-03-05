---
title: Truncate
outline: deep
description: Convert a long string to truncate string.
---

# Truncate

`truncate` is a function convert a long string to truncate string.

## Example

This function truncate a long string into just a few letters according to the maximum string length parameter:

### Regular Truncate

```ts
import { truncate } from "@titocandradev/neatcore";

truncate("Hello, world!", 5);
// "Hello..."
```

### Truncate with Custom Suffix

```ts
import { truncate } from "@titocandradev/neatcore";

truncate("Hello, world!", 5, "!!!");
// "Hello!!!"
```

---
description: Get started with NeatCore in minutes.
title: Quickstart
---

# Quickstart

Get up and running with **NeatCore** in just a few minutes.

---

## 1. Installation

Install via npm:

```bash
npm install @titocandradev/neatcore
```

Or using pnpm:

```bash
pnpm add @titocandradev/neatcore
```

Or using yarn:

```bash
yarn add @titocandradev/neatcore
```

## 2. Import What You Need

NeatCore is fully tree-shakable.\
Import only the functions you use:

```ts
import { slugify, merge, sortBy } from "@titocandradev/neatcore";
```

## 3. Basic Examples

### String Utility

```ts
import { slugify } from "@titocandradev/neatcore";

const title = "Hello World 2026!";
const slug = slugify(title);

console.log(slug);
// "hello-world-2026"
```

### Array Utility

```ts
import { sortBy } from "@titocandradev/neatcore";

const users = [
  { name: "Budi", age: 25 },
  { name: "Tito", age: 30 },
  { name: "Andi", age: 20 },
];

const sorted = sortBy(users, (u) => u.age);

console.log(sorted);
// Sorted by age ascending
```

### Object Utility

```ts
import { merge } from "@titocandradev/neatcore";

const user = merge({ name: "Tito" }, { age: 30 }, { role: "Developer" });

console.log(user);
// {
//   name: "Tito",
//   age: 30,
//   role: "Developer"
// }
```

## 4. TypeScript Support

NeatCore is built with TypeScript-first design.

Types are automatically inferred:

```ts
const result = merge({ name: "Tito" }, { age: 30 });

// result:
// {
//   name: string;
//   age: number;
// }
```

No manual typing needed.

## 5. Immutable by Default

All utilities return new values without mutating the original data.

```ts
const numbers = [3, 1, 2];

const sorted = sortBy(numbers, (n) => n);

// numbers remains unchanged
```

## You're Ready 🚀

You now know the basics of NeatCore.

Explore the full API documentation to discover more utilities and
advanced patterns.

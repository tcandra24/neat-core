---
description: A lightweight, type-safe utility library for modern
  JavaScript and TypeScript applications.
title: What is NeatCore?
---

# What is NeatCore?

**NeatCore** is a lightweight, type-safe utility library designed to
simplify everyday JavaScript and TypeScript development.

It provides clean, predictable, and modern helper functions for working
with:

- Strings
- Arrays
- Objects
- Functions

NeatCore focuses on simplicity, readability, and strong TypeScript
support.

## Why NeatCore?

Modern applications often need small reusable utilities.\
Instead of installing large utility libraries, NeatCore gives you:

- Minimal and focused helpers
- Fully typed APIs (TypeScript-first)
- Immutable operations by default
- Tree-shakable modules
- Clean and consistent design

## 1. Keep It Neat

Every function should be: - Simple - Predictable - Easy to read

## 2. Type-Safe by Default

Strong TypeScript inference without manual typing.

Example:

```ts
import { merge } from "@titocandradev/neatcore";

const result = merge({ name: "Tito" }, { age: 30 });

// result type:
// {
//   name: string;
//   age: number;
// }
```

## 3. Immutable Utilities

Functions do not mutate original data.

```ts
import { sortBy } from "@titocandradev/neatcore";

const users = [
  { name: "Tito", age: 30 },
  { name: "Budi", age: 25 },
];

const sorted = sortBy(users, (u) => u.age);

// [
//   { name: "Budi", age: 25 },
//   { name: "Tito", age: 30 },
// ]
```

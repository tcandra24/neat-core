# @titocandradev/neatcore

> Zero-dependency, tree-shakeable, TypeScript-first utility library.

![npm](https://img.shields.io/npm/v/@titocandradev/neatcore)
![npm downloads](https://img.shields.io/npm/dm/@titocandradev/neatcore)

NeatCore is a lightweight utility library for JavaScript & TypeScript
focused on:

- ✅ Zero Dependency
- 🌲 Fully Tree-Shakeable
- 🧠 Strongly Typed (TypeScript First)
- ⚡ Small & Performant
- 🏗 Ecosystem-Ready Foundation

---

## 📦 Installation

```bash
npm install @titocandradev/neatcore
```

or

```bash
pnpm add @titocandradev/neatcore
```

or

```bash
bun add @titocandradev/neatcore
```

---

## 🚀 Usage

### ES Module

```ts
import { capitalizeWords } from "@titocandradev/neatcore";

capitalizeWords("tito candra");
// → "Tito Candra"
```

### CommonJS

```js
const { capitalizeWords } = require("@titocandradev/neatcore");

capitalizeWords("tito candra");
```

---

## 🧰 Available Utilities (V1 Scope)

### 🔤 String

- `capitalizeWords(str: string): string`

Example:

```ts
capitalizeWords("hello world");
// → "Hello World"
```

---

## 🎯 Design Principles

NeatCore is built with the following principles:

- Small surface API
- Explicit over magic
- Functional and predictable
- No hidden mutation
- Strong typing by default

---

## 🌲 Tree-Shaking Friendly

Import only what you need:

```ts
import { capitalizeWords } from "@titocandradev/neatcore";
```

Modern bundlers like Vite, Webpack, and Rollup will automatically remove
unused code.

---

## 🧪 Testing

This library uses:

- Vitest
- Coverage support

---

## 🏗 Build

Build tool: - tsup

Output: - ESM - CJS - Type Definitions

---

## 🛣 Roadmap

V1 Scope: - Array utilities - Object utilities - String utilities -
Function utilities

Future plans: - Advanced typing utilities - Performance helpers - DX
improvements - Plugin ecosystem

---

## 📄 License

MIT

---

## 👨‍💻 Author

Tito Candra\
GitHub: https://github.com/tcandra24

---

## ⭐ Why NeatCore?

Because small utilities are often underestimated.

NeatCore is designed as a strongly-typed engineering utility foundation
--- not just another helper library.

## Documentation

Read full API Design Guideline here:

👉 https://tcandra24.github.io/neat-core/

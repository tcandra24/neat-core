# @tito/neatcore

> Zero-dependency, tree-shakeable, TypeScript-first utility library.

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
npm install @tito/neatcore
```

or

```bash
pnpm add @tito/neatcore
```

or

```bash
bun add @tito/neatcore
```

---

## 🚀 Usage

### ES Module

```ts
import { firstUppercase } from "@tito/neatcore";

firstUppercase("tito candra");
// → "Tito Candra"
```

### CommonJS

```js
const { firstUppercase } = require("@tito/neatcore");

firstUppercase("tito candra");
```

---

## 🧰 Available Utilities (V1 Scope)

### 🔤 String

- `firstUppercase(str: string): string`

Example:

```ts
firstUppercase("hello world");
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
import { firstUppercase } from "@tito/neatcore";
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
GitHub: https://github.com/your-username

---

## ⭐ Why NeatCore?

Because small utilities are often underestimated.

NeatCore is designed as a strongly-typed engineering utility foundation
--- not just another helper library.

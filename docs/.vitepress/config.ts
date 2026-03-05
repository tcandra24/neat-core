import { defineConfig } from "vitepress";
import { version } from "../../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Neat Core",
  description: "A clean, zero-dependency, TypeScript-first utility core.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Array",
        items: [
          { text: "Chunk", link: "/guide/array/chunk" },
          { text: "Difference", link: "/guide/array/difference" },
          { text: "Group By", link: "/guide/array/group-by" },
          { text: "Intersection", link: "/guide/array/intersection" },
          { text: "Sort By", link: "/guide/array/sort-by" },
          { text: "Unique", link: "/guide/array/unique" },
          { text: "Unique By", link: "/guide/array/unique-by" },
        ],
      },
      {
        text: "Function",
        items: [
          { text: "Debounce", link: "/guide/function/debounce" },
          { text: "Try Catch", link: "/guide/function/try-catch" },
        ],
      },
      {
        text: "Object",
        items: [
          { text: "Get", link: "/guide/object/get" },
          { text: "Is Empty Object", link: "/guide/object/is-empty-object" },
          { text: "Merge", link: "/guide/object/merge" },
          { text: "Omit", link: "/guide/object/omit" },
          { text: "Pick", link: "/guide/object/pick" },
        ],
      },
      {
        text: "String",
        items: [
          { text: "Capitalize", link: "/guide/string/capitalize" },
          { text: "Capitalize Words", link: "/guide/string/capitalize-words" },
          { text: "Initial Words", link: "/guide/string/initial-words" },
          { text: "Slugify", link: "/guide/string/slugify" },
          { text: "Camel Case", link: "/guide/string/camel-case" },
          { text: "Kebab Case", link: "/guide/string/kebab-case" },
          { text: "Snake Case", link: "/guide/string/snake-case" },
          { text: "Truncate", link: "/guide/string/truncate" },
        ],
      },
      {
        text: `v${version}`,
        items: [{ text: `v${version} (current)`, link: "/" }],
      },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is NeatCore", link: "/guide/what-is-neat-core" },
          { text: "Quickstart", link: "/guide/quickstart" },
        ],
      },
      {
        text: "Array",
        items: [
          { text: "Chunk", link: "/guide/array/chunk" },
          { text: "Difference", link: "/guide/array/difference" },
          { text: "Group By", link: "/guide/array/group-by" },
          { text: "Intersection", link: "/guide/array/intersection" },
          { text: "Sort By", link: "/guide/array/sort-by" },
          { text: "Unique", link: "/guide/array/unique" },
          { text: "Unique By", link: "/guide/array/unique-by" },
        ],
      },
      {
        text: "Function",
        items: [
          { text: "Debounce", link: "/guide/function/debounce" },
          { text: "Try Catch", link: "/guide/function/try-catch" },
        ],
      },
      {
        text: "Object",
        items: [
          { text: "Get", link: "/guide/object/get" },
          { text: "Is Empty Object", link: "/guide/object/is-empty-object" },
          { text: "Merge", link: "/guide/object/merge" },
          { text: "Omit", link: "/guide/object/omit" },
          { text: "Pick", link: "/guide/object/pick" },
        ],
      },
      {
        text: "String",
        items: [
          { text: "Capitalize", link: "/guide/string/capitalize" },
          { text: "Capitalize Words", link: "/guide/string/capitalize-words" },
          { text: "Initial Words", link: "/guide/string/initial-words" },
          { text: "Slugify", link: "/guide/string/slugify" },
          { text: "Camel Case", link: "/guide/string/camel-case" },
          { text: "Kebab Case", link: "/guide/string/kebab-case" },
          { text: "Snake Case", link: "/guide/string/snake-case" },
          { text: "Truncate", link: "/guide/string/truncate" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/tcandra24/neat-core" }],
  },
});

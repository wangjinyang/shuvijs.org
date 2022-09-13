/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const fs = require("fs-extra");

const getTocFromId = (id) => {
  const src = fs.readFileSync(`./docs/${id}.md`, "utf-8");
  const h2s = src.match(/^## [^\n]+/gm);
  const cacheAnchor = new Map();
  let headers = [];
  if (h2s) {
    headers = h2s.map((h) => {
      const value = h
        .slice(2)
        .replace(/<sup class=.*/, "")
        .replace(/\\</g, "<")
        .replace(/`([^`]+)`/g, "$1")
        .trim();

      let anchor = value
        .toLowerCase()
        .replace(" ", "-")
        .replace(/[^a-zA-Z0-9_-]/g, "");
      if (cacheAnchor.has(anchor)) {
        cacheAnchor.set(anchor, cacheAnchor.get(anchor) + 1);
        anchor = anchor + "-" + cacheAnchor.get(anchor);
      } else {
        cacheAnchor.set(anchor, 0);
      }
      return { value, anchor };
    });
  }
  return headers;
};

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting Stared",
      items: ["tutorials", "playground"],
      link: {
        type: "doc",
        id: "tutorials",
      },
      collapsed: false,
      collapsible: false,
    },
    {
      type: "link",
      label: "Guides",
      href: "/docs/guides",
    },
    // {
    //   "Getting Stared": ["tutorials", "playground"]
    // },
    // {
    //   "Guides"
    // }
  ],

  // By default, Docusaurus generates a sidebar from the docs folder structure
  guides: [{ type: "autogenerated", dirName: "guides" }],

  reference: [
    {
      type: "category",
      label: "Conventions",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "reference/conventions/project-structure",
          customProps: {
            headers: getTocFromId("reference/conventions/project-structure"),
          },
        },
        {
          type: "doc",
          id: "reference/conventions/routes",
          customProps: {
            headers: getTocFromId("reference/conventions/routes"),
          },
        },
      ],
    },
    {
      type: "category",
      label: "Configuration",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "reference/configuration/general",
          customProps: {
            headers: getTocFromId("reference/configuration/general"),
          },
        },
        {
          type: "doc",
          id: "reference/configuration/advanced",
          customProps: {
            headers: getTocFromId("reference/configuration/advanced"),
          },
        },
      ],
    },
  ],

  api: [
    // In order to generate the API directory, we must manually add the sidebar below.
    {
      type: "category",
      label: "Runtime API",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "api/runtime/general",
          customProps: {
            headers: getTocFromId("api/runtime/general"),
          },
        },
        {
          type: "doc",
          id: "api/runtime/components",
          customProps: {
            headers: getTocFromId("api/runtime/components"),
          },
        },
        {
          type: "doc",
          id: "api/runtime/hooks",
          customProps: {
            headers: getTocFromId("api/runtime/hooks"),
          },
        },
      ],
    },
    {
      type: "category",
      label: "Types Definition",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "api/types/shuvi-runtime",
          customProps: {
            headers: getTocFromId("api/types/shuvi-runtime"),
          },
        },
        {
          type: "doc",
          id: "api/types/shuvi-runtime-app",
          customProps: {
            headers: getTocFromId("api/types/shuvi-runtime-app"),
          },
        },
        {
          type: "doc",
          id: "api/types/shuvi-runtime-server",
          customProps: {
            headers: getTocFromId("api/types/shuvi-runtime-server"),
          },
        },
      ],
    },
  ],

  oldReference: [{ type: "autogenerated", dirName: "old-reference" }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;

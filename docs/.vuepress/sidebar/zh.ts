import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/backend/": "structure",

  "/web/": "structure",

  "/linux/": "structure",

  "/tools/": "structure",

  "/tools/git/": "structure",

  "/others/": "structure",

  // fallback
  "/": ["", "backend", "web", "linux", "tools", "others", "intro"],
});

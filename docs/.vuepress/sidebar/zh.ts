import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/tools/": "structure",

  "/tools/git/": "structure",

  // fallback
  "/": ["", "demo", "intro", "slides"],
});

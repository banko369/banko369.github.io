import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/notes/": "structure",

  "/notes/git/": "structure",

  // fallback
  "/": ["", "demo", "notes", "intro", "slides"],
});

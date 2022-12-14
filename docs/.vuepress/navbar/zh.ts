import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "后端",
    icon: "back-stage",
    prefix: "/backend/",
    children: ["README.md"],
  },
  {
    text: "Web",
    icon: "network",
    prefix: "/web/",
    children: ["README.md"],
  },
  {
    text: "Linux",
    icon: "linux",
    prefix: "/linux/",
    children: [
      { text: "命令查询", icon: "search", link: "https://www.banko.work/linux-command" },
      { text: "笔记", children: ["README.md"] }
    ],
  },
  {
    text: "工具",
    icon: "tool",
    prefix: "/tools/",
    children: ["git/"],
  },
  {
    text: "其它",
    icon: "others",
    prefix: "/others/",
    children: ["README.md"],
  },
  {
    text: "文档规范",
    icon: "note",
    link: "https://github.com/ruanyf/document-style-guide",
  },
]);

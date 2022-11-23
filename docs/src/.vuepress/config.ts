import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "番猫工作室",
      description: "个人笔记",
    },
    "/en/": {
      lang: "en-US",
      title: "BankoStudio",
      description: "A private workspace",
    },
  },

  theme,

  shouldPrefetch: false,
});

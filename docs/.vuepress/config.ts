import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "番猫的个人日志",
      description: "个人日志",
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

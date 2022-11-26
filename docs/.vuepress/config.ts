import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
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
  plugins: [
    searchPlugin({
      // 你的选项
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/en/': {
          placeholder: 'Search',
        },
      },
      hotKeys: ['s', '/'],
      maxSuggestions: 5,
      // 排除首页 判断一个页面是否应该被包含在搜索索引中
      isSearchable: (page) => page.path !== '/',
      // 允许搜索 Frontmatter 中的 `tags` 默认情况下，该插件会将页面标题和小标题作为搜索索引。
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
  ],

  shouldPrefetch: false,
});

import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  fullscreen: true,

  hostname: "http://www.banko.work",

  author: {
    name: "Banko",
    url: "http://www.banko.work",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "banko369/banko369.github.io",

  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      BiliBili: "https://www.bilibili.com/",
      GitHub: "https://github.com/",
      Gitee: "https://gitee.com/",
      稀土掘金: [
        "https://juejin.cn/",
        '<svg t="1669463709503" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17381" width="200" height="200"><path d="M493.504 558.144a31.904 31.904 0 0 0 45.28 0l308.352-308.352a31.968 31.968 0 1 0-45.248-45.248L516.16 490.272 221.984 196.128a31.968 31.968 0 1 0-45.248 45.248l316.768 316.768z" p-id="17382" fill="#1296db"></path><path d="M801.888 460.576L516.16 746.304 222.016 452.16a31.968 31.968 0 1 0-45.248 45.248l316.768 316.768a31.904 31.904 0 0 0 45.28 0l308.352-308.352a32 32 0 1 0-45.28-45.248z" p-id="17383" fill="#1296db"></path></svg>'
      ],
      美团技术团队: [
        "https://tech.meituan.com/",
        '<svg t="1669463016778" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1969" width="200" height="200"><path d="M513.0752 510.8224m-450.816 0a450.816 450.816 0 1 0 901.632 0 450.816 450.816 0 1 0-901.632 0Z" fill="#FFBC42" p-id="1970"></path><path d="M863.0784 503.7056c0-52.7872-56.3712-67.0208-86.016-77.1072-29.6448-10.0864-176.0768-64.2048-176.0768-64.2048s-100.1472-163.328-190.0032-101.888c-21.8112 13.7728-18.2272 63.6416 12.032 84.5312-41.8304-7.5776-110.7968 7.9872-107.264 47.616 3.584 39.6288 58.3168 60.0576 155.2896 43.6224 16.896-3.584 40.4992 8.9088 12.032 32.9216-15.1552 10.7008-80.9984 28.928-225.1776 3.1232-102.6048-18.3808-162.816-32.2048-189.0304-38.7072a451.6864 451.6864 0 0 0-6.6048 77.2608c0 149.504 72.8064 282.0096 184.8832 364.032 22.016-6.5536 45.0048-15.104 68.608-26.112 60.5184-28.4672 42.7008-57.856 28.4672-68.096s-42.7008-50.7392 36.9152-98.3552 178.7392-90.1632 296.8064-105.0112c37.9904-5.3248 83.6608-5.9392 105.6256-7.1168 21.9648-1.2288 79.5136-13.6704 79.5136-66.5088z m-260.5056-41.8304c-15.872 0-28.7744-12.9024-28.7744-28.7744s12.9024-28.7744 28.7744-28.7744 28.7744 12.9024 28.7744 28.7744-12.8512 28.7744-28.7744 28.7744z" fill="#FFFFFF" p-id="1971"></path></svg>'
      ],
      博客园: [
        "https://www.cnblogs.com/",
        '<svg t="1669463969476" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18500" width="200" height="200"><path d="M512 0c-282.76736 0-512 229.23264-512 512s229.23264 512 512 512 512-229.23264 512-512-229.23264-512-512-512zM320 768c-35.34848 0-64-28.65152-64-64s28.65152-64 64-64 64 28.65152 64 64-28.65152 64-64 64zM496.00512 768c0-132.34176-107.66336-240.00512-240.00512-240.00512l0-96.01024c185.26208 0 335.99488 150.7328 335.99488 335.99488l-96.01024 0zM688.00512 768c0-115.38432-44.93312-223.86688-126.52544-305.47968s-190.07488-126.52544-305.47968-126.52544l0-96.01024c141.02528 0 273.63328 54.92736 373.3504 154.64448s154.64448 232.32512 154.64448 373.3504l-96.01024 0z" p-id="18501" fill="#1296db"></path></svg>'
      ],
      网道: [
        "https://wangdoc.com/",
        '<svg t="1669456361830" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8282" width="200" height="200"><path d="M686.445714 908.434286a37.302857 37.302857 0 0 0 24.064-8.704 38.838857 38.838857 0 0 0 13.824-22.016l156.672-719.872a38.765714 38.765714 0 0 0-5.632-29.184 36.278857 36.278857 0 0 0-25.088-16.896 31.085714 31.085714 0 0 0-9.216-1.024 37.302857 37.302857 0 0 0-24.064 8.704 34.157714 34.157714 0 0 0-12.8 22.016L683.373714 723.090286 550.253714 140.434286a38.765714 38.765714 0 0 0-37.888-29.696 40.228571 40.228571 0 0 0-25.088 8.192 36.571429 36.571429 0 0 0-13.824 21.504l-133.12 582.656-120.832-581.632a34.157714 34.157714 0 0 0-12.8-22.016 37.302857 37.302857 0 0 0-24.064-8.704 31.085714 31.085714 0 0 0-9.216 1.024 36.278857 36.278857 0 0 0-25.088 16.896 38.765714 38.765714 0 0 0-5.632 29.184L299.373714 877.714286a38.838857 38.838857 0 0 0 13.824 22.016 40.228571 40.228571 0 0 0 49.152 0.512 36.571429 36.571429 0 0 0 13.824-21.504l136.192-590.848 135.168 590.848a38.765714 38.765714 0 0 0 37.888 29.696h1.024z" p-id="8283" fill="#1296db"></path></svg>'
      ],
      阮一峰: [
        "https://www.ruanyifeng.com/blog/",
        '<svg t="1669265072994" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7444" width="200" height="200"><path d="M410.7356 19.6004l81.695744 0 0 171.536384 343.056384 0-20.4319 285.696 142.944256 0c-5.4395 68.0796-10.8964 140.2399-16.3359 216.4644-5.4395 114.3685-62.6237 170.1765-171.52 167.4557-51.7437 0-100.7524 0-147.0239 0 0-13.6161-5.4559-40.8484-16.3359-81.6804 51.712 5.4395 102.0805 8.1603 151.1035 8.1603 68.0643 8.1756 104.8156-25.856 110.2725-102.0959 2.7197-51.7284 5.4395-98.0163 8.1603-138.8636L492.432384 546.273284l0 432.912384-81.695744 0L410.73664 546.272256 39.088128 546.272256l0-69.439488 371.648512 0L410.73664 264.672256 104.431616 264.672256l0-73.535488 306.304 0L410.735616 19.600384zM749.7124 264.6723l-257.28 0 0 212.160512 245.040128 0L749.7124 264.6723zM716.7201 76.6239l53.1036-53.1036c84.3837 54.4645 156.544 103.4721 216.448 147.0239l-53.0883 65.3435C889.6164 197.7764 817.4561 144.6881 716.7201 76.6239z" p-id="7445"></path></svg>',
      ],
      廖雪峰: [
        "https://www.liaoxuefeng.com/",
        '<svg t="1669265011539" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4202" width="200" height="200"><path d="M584.064 560.2048l-72.1792 72.1792-48.128 48.128v72.1792l-72.1792 120.3072 48.128 24.064L608.128 728.6272l-24.064-168.4224z m-120.3072-120.3072l-168.4352-24.064L126.8992 584.2688l24.064 48.128 120.3072-72.1792h72.1792l48.128-48.128 72.1792-72.192z" fill="#CCCCCC" p-id="4203"></path><path d="M247.2064 656.448c-47.3984 69.1584-119.9872 154.4064-120.3072 192.4864-0.2432 28.928 18.9568 48.3584 48.128 48.128 38.6944-0.3328 120.4352-72.5632 192.4864-120.3072l-120.3072-120.3072z" fill="#FFCC66" p-id="4204"></path><path d="M319.3856 632.384c-47.3984 69.1584-144.3712 154.4064-144.3712 192.4992 0 25.1392 2.4192 24.064 24.064 24.064 38.6944 0 120.4352-96.6272 192.4864-144.3712l-72.1792-72.192z" fill="#ED7161" p-id="4205"></path><path d="M848.7424 127.0912C773.12 131.7632 642.56 140.7744 487.8208 295.5264 373.9904 409.344 274.1376 574.8608 227.328 684.6976l112.6912 112.6912c109.2224-46.3616 273.6256-146.4576 388.416-261.248C882.176 382.4 890.9312 251.392 896.8704 175.2192c2.6368-34.0096-16.6784-50.0736-48.128-48.128z" fill="#387AA7" p-id="4206"></path><path d="M848.7424 127.0912C773.12 131.7632 642.56 140.7744 487.8208 295.5264c-92.9152 92.9152-176.4224 220.2368-229.5296 323.6736l147.2 147.2128c102.8096-52.9664 229.3632-136.704 322.944-230.272C882.176 382.4 890.9312 251.392 896.8704 175.2192c2.6368-34.0096-16.6784-50.0736-48.128-48.128z" fill="#48A0DC" p-id="4207"></path><path d="M704.3712 319.5904m-96.2432 0a96.2432 96.2432 0 1 0 192.4864 0 96.2432 96.2432 0 1 0-192.4864 0Z" fill="#4D4D4D" p-id="4208"></path><path d="M704.3712 319.5904m-48.128 0a48.128 48.128 0 1 0 96.256 0 48.128 48.128 0 1 0-96.256 0Z" fill="#FFFFFF" p-id="4209"></path></svg>'
      ],
      MrHope: [
        "https://mrhope.site",
        '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>',
      ],
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      displayFooter: true,
      footer: "Copyright © 2022 番猫",
      copyright: false,

      blog: {
        description: "一个全栈开发者",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      displayFooter: true,
      footer: "Copyright © 2022 Banko",
      copyright: false,

      blog: {
        description: "A full stack programmer",
        intro: "/en/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  encrypt: {
    config: {
      "/en/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    comment: {
      provider: "Giscus",
      repo: "banko369/banko369.github.io",
      repoId: "R_kgDOIgVzUg",
      category: "Announcements",
      categoryId: "DIC_kwDOIgVzUs4CSxAL",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/en/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});

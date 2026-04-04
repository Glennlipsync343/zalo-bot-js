import { defineConfig } from "vitepress";

export default defineConfig({
  title: "zalo-bot-js",
  description: "TypeScript SDK for the Zalo Bot API",
  base: "/zalo-bot-js/",
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/KaiyoDev/zalo-bot-js" },
    ],
    search: {
      provider: "local",
    },
    nav: [
      { text: "README", link: "https://github.com/KaiyoDev/zalo-bot-js" },
      { text: "Tiếng Việt", link: "/vi/" },
      { text: "English", link: "/en/" },
    ],
    sidebar: {
      "/vi/": [
        {
          text: "Tài liệu tiếng Việt",
          items: [
            { text: "Giới thiệu", link: "/vi/" },
            { text: "Bắt đầu nhanh", link: "/vi/getting-started" },
            { text: "Kiến trúc", link: "/vi/architecture" },
            { text: "Ví dụ và test", link: "/vi/examples" },
          ],
        },
      ],
      "/en/": [
        {
          text: "English docs",
          items: [
            { text: "Overview", link: "/en/" },
            { text: "Getting started", link: "/en/getting-started" },
            { text: "Architecture", link: "/en/architecture" },
            { text: "Examples and tests", link: "/en/examples" },
          ],
        },
      ],
    },
    footer: {
      message: "Built for Vietnamese developers, documented for everyone.",
      copyright: "MIT License",
    },
  },
});

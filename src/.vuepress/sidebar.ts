import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: [
        "Welcome to CGNICO",
        {
          text: "虚幻引擎",
          icon: "pen-to-square",
          prefix: "UnrealEngine/",
          children: [
            { text: "UGS Build & Publish 4.27", icon: "pen-to-square", link: "0001" },
            { text: "UGS MySQL Deployment", icon: "pen-to-square", link: "0002" },
          ],
        },
      ],
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});

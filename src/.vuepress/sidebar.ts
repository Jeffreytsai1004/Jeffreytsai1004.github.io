import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "Blog",
      icon: "book",
      prefix: "posts/",
      children: [
        {
          text: "UnrealEngine",
          icon: "pen-to-square",
          prefix: "UnrealEngine/",
          children: [
            { text: "UGS Build & Publish 4.27", icon: "pen-to-square", link: "0001" },
            { text: "UGS MySQL Deployment", icon: "pen-to-square", link: "0002" },
          ],
        },
      ],
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});

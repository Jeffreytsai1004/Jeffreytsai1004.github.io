import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "博客",
      icon: "book",
      prefix: "posts/",
      children: [
        {
          text: "UnrealEngine",
          icon: "pen-to-square",
          prefix: "UnrealEngine/",
          children: [
            { text: "UGS Build & Publish 4.27", icon: "pen-to-square", link: "0001" },
            { text: "UGS Build & Publish 5.3.2", icon: "pen-to-square", link: "0002" },
            { text: "UGS MySQL Deployment", icon: "pen-to-square", link: "0003" },
            { text: "UGS MetadataServer .NET Core", icon: "pen-to-square", link: "0004" },
            { text: "Metahuman 基数设置", icon: "pen-to-square", link: "0005" },
          ],
        },
        {
          text: "MetaHuman",
          icon: "pen-to-square",
          prefix: "MetaHuman/",
          children: [
            { text: "Metahuman 基数设置", icon: "pen-to-square", link: "0001" },
          ],
        },
        {
          text: "UEFN",
          icon: "pen-to-square",
          prefix: "UEFN/",
          children: [
            { text: "虚幻编辑器《堡垒之夜》文档", icon: "pen-to-square", link: "0001" },
            { text: "《堡垒之夜》虚幻编辑器的新功能" , icon: "pen-to-square", link: "0002" },
          ],
        },
      ],
    },
    { text: "论坛", icon: "book", link: "https://disc.cgnico.com/",},
    { text: "幻灯片", icon: "person-chalkboard", link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",},
    "/demo/",
  ],
});

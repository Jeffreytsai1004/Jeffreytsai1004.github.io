import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      "Welcome to CGNICO",
      {
        text: "虚幻引擎",
        icon: "pen-to-square",
        prefix: "UnrealEngine/",
        children: [
          { text: "UnrealGameSync 部署", icon: "pen-to-square", link: "1" },
          { text: "UnrealGameSync MySQL部署", icon: "pen-to-square", link: "2" },
        ],
      },
    ],
  },
  { text: "CGNICO 论坛", icon: "book", link: "https://disc.cgnico.com/",},
]);

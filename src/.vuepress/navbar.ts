import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "博客",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "UnrealEngine",
        icon: "pen-to-square",
        prefix: "UnrealEngine/",
        children: [
          { text: "UnrealGameSync", link: "UnrealGameSync/" }
        ],
      },
      {
        text: "WebSiteDeploy",
        icon: "pen-to-square",
        prefix: "WebSiteDeploy/",
        children: [
          { text: "Vuepress", link: "Vuepress/" },
        ],
      },
    ],
  },
  { text: "论坛", icon: "book", link: "https://disc.cgnico.com/",},
  "/demo/",
]);

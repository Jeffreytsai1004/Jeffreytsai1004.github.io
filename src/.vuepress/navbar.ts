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
          { text: "MetaHuman", link: "MetaHuman/" },
          { text: "UEFN", link: "UEFN/" },
          { text: "UnrealGameSync", link: "UnrealGameSync/" },
          { text: "HoudiniEngine", link: "HoudiniEngine/" },
          { text: "SourceEngine", link: "SourceEngine/" },
        ],
      },
      {
        text: "Linux",
        icon: "pen-to-square",
        prefix: "Linux/",
        children: [
          { text: "Ubuntu", link: "Ubuntu/" },
          { text: "Docker", link: "Docker/" },
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

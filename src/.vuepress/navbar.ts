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
          { text: "UnrealGameSync", link: "UnrealGameSync/" },
          { text: "MetaHuman-DNA-Calibration", link: "MetaHuman-DNA-Calibration/" }
        ],
      }
    ],
  },
  { text: "论坛", icon: "book", link: "https://disc.cgnico.com/",},
  "/demo/",
]);

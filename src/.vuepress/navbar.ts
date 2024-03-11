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
          { text: "UGS Build & Publish 4.27", icon: "pen-to-square", link: "0001" },
          { text: "UGS MySQL Deployment", icon: "pen-to-square", link: "0002" },
        ],
      },
    ],
  },
  { text: "CGNICO 论坛", icon: "book", link: "https://disc.cgnico.com/",},
]);

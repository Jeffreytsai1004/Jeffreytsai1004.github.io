import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "博客",
      icon: "pen-to-square",
      prefix: "posts/",
      children: [
        {
          text: "UnrealEngine",
          icon: "pen-to-square",
          prefix: "UnrealEngine/",
          children: [
            {
              text: "UnrealGameSync",
              icon: "pen-to-square",
              prefix: "UnrealGameSync/",
              children: [
                { text: "UGS Build & Publish 4.27.2", icon: "pen-to-square", link: "0001" },
                { text: "UGS Build & Publish 5.3.2", icon: "pen-to-square", link: "0002" },
                { text: "UGS MySQL", icon: "pen-to-square", link: "0003" },
                { text: "UGS MetadataServer", icon: "pen-to-square", link: "0004" },
              ],
            },
            {
              text: "MetaHuman-DNA-Calibration",
              icon: "pen-to-square",
              prefix: "MetaHuman-DNA-Calibration/",
              children: [
              ],
            }
          ],
        }
      ],
    },
    { text: "论坛", icon: "book", link: "https://disc.cgnico.com/",},
    "/demo/",
  ],
});

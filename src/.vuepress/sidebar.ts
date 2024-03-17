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
              text: "MetaHuman",
              icon: "pen-to-square",
              prefix: "MetaHuman/",
              children: [
                { text: "基础设置", icon: "pen-to-square", link: "0001" },
              ],
            },
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
              text: "UEFN",
              icon: "pen-to-square",
              prefix: "UEFN/",
              children: [
                { text: "UEFN 文档", icon: "pen-to-square", link: "0001" },
                { text: "UEFN 新功能", icon: "pen-to-square", link: "0002" },
              ],
            },
            {
              text: "HoudiniEngine",
              icon: "pen-to-square",
              prefix: "HoudiniEngine/",
              children: [
              ],
            },
          ],
        },
        {
          text: "WebSiteDeploy",
          icon: "pen-to-square",
          prefix: "WebSiteDeploy/",
          children: [
            {
              text: "Vuepress",
              icon: "pen-to-square",
              prefix: "Vuepress/",
              children: [
                { text: "运行环境设置", icon: "pen-to-square", link: "0001" },
                { text: "创建项目", icon: "pen-to-square", link: "0002" },
                { text: "项目命令", icon: "pen-to-square", link: "0003" },
                { text: "项目内容", icon: "pen-to-square", link: "0004" },
                { text: "配置项目", icon: "pen-to-square", link: "0005" },
                { text: "项目结构", icon: "pen-to-square", link: "0006" },
                { text: "部署项目", icon: "pen-to-square", link: "0007" },
              ],
            },
          ],
        },
      ],
    },
    { text: "论坛", icon: "book", link: "https://disc.cgnico.com/",},
    "/demo/",
  ],
});

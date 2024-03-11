import { defineUserConfig } from "vuepress";
// import {search} from "@vuepress/plugin-search";
import theme from "./theme.js";

//Here is the configuration for the blog
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "CGNICO Blog",
  description: "CGNICO 博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

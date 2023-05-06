import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "快速导航", icon: "navigation", link: "/quicknav/" },
  { text: "博客主页", icon: "blog", link: "/blog/" },
  { text: "学习笔记", icon: "code", link: "/codenotes/" },
  { text: "面试突击", icon: "code", link: "/InterviewAssault/" },
  { text: "开源项目", icon: "github", link: "/projects/" },
  { text: "游玩攻略", icon: "note", link: "/floatinglife/" },
  {
    text: "摄影小册",
    icon: "advance",
    prefix: "/resources/",
    children: [
      {
        text: "摄影基础",
        icon: "animation",
        link: "books/",
      },
      {
        text: "摄影后期",
        icon: "play",
        link: "videos/",
      },
      {
        text: "人像精修",
        icon: "play",
        link: "videos/",
      },
    ],
  },
  {
    text: "资源宝库",
    icon: "advance",
    prefix: "/resources/",
    children: [
      {
        text: "书籍资源",
        icon: "animation",
        link: "books/",
      },
      {
        text: "影音资源",
        icon: "play",
        link: "videos/",
      },
    ],
  },
]);

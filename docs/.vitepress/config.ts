import { defineConfig } from "vitepress";
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";
import { fileURLToPath, URL } from "node:url";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vk-element/",
  title: "vk-element",
  description: "基于vue3的仿Element Plus的组件库",
  // srcDir: "components",
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/logo.png",
    nav: [
      { text: "安装", link: "/components/" },
      { text: "组件", link: "/components/button" },
    ],
    sidebar: [
      {
        text: "Basic 基础组件",
        items: [{ text: "Button 按钮", link: "/components/button" }],
      },
      {
        text: "Form 表单组件",
        items: [
          { text: "Input 输入框", link: "/components/input" },
          { text: "Select 选择器", link: "/components/select" },
          { text: "Switch 开关", link: "/components/switch" },
          { text: "Form 表单", link: "/components/form" },
          { text: "Rate 评分", link: "/components/rate" },
        ],
      },
      {
        text: "Data 数据展示",
        items: [{ text: "Collapse 折叠面板", link: "/components/collapse" }],
      },
      {
        text: "Navigation 导航",
        items: [{ text: "Dropdown 下拉菜单", link: "/components/dropdown" }],
      },
      {
        text: "Feedback 反馈组件",
        items: [
          { text: "Alert 提示", link: "/components/alert" },
          { text: "Message 消息提示", link: "/components/message" },
          { text: "Notification 通知", link: "/components/notification" },
          { text: "Tooltip 文字提示", link: "/components/tooltip" },
          { text: "Dialog 对话框", link: "/components/dialog" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://gitee.com/lyq514/vk-element" }],
  },
});

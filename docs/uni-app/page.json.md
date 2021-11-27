---
sidebar_position: 2
title: page.json 基本配置
tags: [uni-app]
---

```json
{
  // 设置页面路径及窗口表现
  "pages": [
    {
      // 配置页面路径
      "path": "pages/index/index",
      // 配置页面窗口表现
      "style": {
        // 导航栏标题文字内容
        "navigationBarTitleText": "首页"
      }
    },
    {
      "path": "pages/mine/mine",
      "style": {
        "navigationBarTitleText": "个人中心"
      }
    }
  ],
  // 设置默认页面的窗口表现
  "globalStyle": {
    // 导航栏标题颜色及状态栏前景颜色，仅支持 black/white
    "navigationBarTextStyle": "black",
    // 导航栏标题文字内容
    "navigationBarTitleText": "uni-app",
    // 导航栏背景颜色
    "navigationBarBackgroundColor": "#F8F8F8",
    // 下拉显示出来的窗口的背景色
    "backgroundColor": "#F8F8F8"
  },
  "tabBar": {
    // tab 上的文字默认颜色
    "color": "#707070",
    // 	tab 上的文字选中时的颜色
    "selectedColor": "#e74c3c",
    // tabbar 上边框的颜色，可选值 black/white
    "borderStyle": "black",
    // tab 的背景色
    "backgroundColor": "#ffffff",
    // tab 的列表，最少2个、最多5个
    "list": [
      {
        // 页面路径，必须在 pages 中先定义
        "pagePath": "pages/index/index",
        // 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效，不支持网络图片，不支持字体图标
        "iconPath": "static/icons/home.png",
        // 选中时的图片路径
        "selectedIconPath": "static/icons/home-o.png",
        // tab 上按钮文字
        "text": "首页"
      },
      {
        "pagePath": "pages/mine/mine",
        "iconPath": "static/icons/mine.png",
        "selectedIconPath": "static/icons/mine-o.png",
        "text": "我的"
      }
    ]
  }
}

```
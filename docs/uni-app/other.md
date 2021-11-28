---
sidebar_position: 6
title: 其它
tags: [uni-app, other]
---

`image` 的 `src` 支持相对路径、绝对路径、URL、base64 编码。其中，绝对路径可以是这样的 `/static/logo.png"`，也可以是这样的 `@/static/logo.png"`。

`import xxx from 'path'` 中的 `path` 只能是相对路径，如要使用绝对路径不能是这样的 `/request/index.js`，必须加一个 `@` 符号，如 `@/request/index.js`。

## uni.showToast

我现在想在界面上显示一个消息提示，只有文字的那种，用 [uni.showToast](https://uniapp.dcloud.io/api/ui/prompt) 可以方便的实现。

```js
uni.showToast({
  title: '消息内容',
  icon: 'none'
});
```

我现在想在提示结束后跳转到登录界面，然而使用下面的代码效果却不理想

```js
uni.showToast({
  title: '请登录',
  icon: 'none',
  duration: 2000, // 提示的延迟时间，单位毫秒，默认：1500
  success() {
    uni.navigateTo({
      url: '/pages/login/login'
    });
  }
});
```

`success` 是在提示出现的那一刻就调用了，提示文字会一闪而过。

自己封装吧

```js
const showToastWait = (title, duration = 1500) => {
  return new Promise((resolve) => {
    uni.showToast({
      title,
      icon: 'none',
      duration: duration,
      success() {
        setTimeout(() => {
          resolve();
        }, duration);
      }
    });
  });
};
```

效果杠杠的

```js
async handleNavigateToLogin() {
  await showToastWait('请登录', 2000);

  uni.navigateTo({
    url: '/pages/login/login'
  });
}
```

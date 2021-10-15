---
title: 配置 VSCode ESLint Prettier Vetur
authors: luzhongwei
tags: [编辑器, VSCode, ESLint, Prettier, Vetur, Vue]
---

使用 VSCode、ESLint、Prettier、Vetur 规范你的代码。

<!--truncate-->

## 安装 eslint 和 prettier 依赖包

```bash
npm install --save-dev eslint prettier
```

## 安装 VSCode 插件

- ESLint
- Prettier
- Vetur

## 创建 `.eslintignore` 和 `.prettierignore` 文件

新建 `.eslintignore` 和 `.prettierignore` 文件，内容如下

```
build/*.js
src/assets
public
dist

```

## 创建 `.eslintrc.js` 文件

新建 `.eslintrc.js` 文件，内容如下

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    semi: ['warn', 'always'], // 必须加分号
    quotes: ['warn', 'single'], // 尽量使用单引号
    eqeqeq: 'warn', // 全等
    indent: ['warn', 2], // 缩进
    'comma-dangle': ['warn', 'never'] // 结尾逗号
  }
};
```

## 创建 `.prettierrc.js` 文件

新建 `.prettierrc.js` 文件，内容如下

```js
module.exports = {
  eslintIntergration: true,
  semi: true, // 分号
  singleQuote: true, // 单引号
  trailingComma: 'none' // 结尾逗号
};
```

## 配置 VSCode

```json
{
  // 文件图标主题（命令 file icon theme）
  "workbench.iconTheme": "vscode-icons",
  // 颜色主题（命令 color theme）
  "workbench.colorTheme": "One Dark Pro",
  // 主题禁用斜体
  "oneDarkPro.italic": false,
  // 侧边栏位置
  "workbench.sideBar.location": "right",
  // 编辑器窗口缩放级别
  "window.zoomLevel": 1,
  // 字体大小
  "editor.fontSize": 16,
  // 显示空白符
  "editor.renderWhitespace": "all",
  // 缩进空格个数
  "editor.tabSize": 2,
  // 行号旁显示折叠图标
  "editor.showFoldingControls": "always",
  // 换行
  "editor.wordWrap": "on",
  // 输入一行后格式化该行
  "editor.formatOnType": true,
  // 粘贴时格式化
  "editor.formatOnPaste": true,
  // 输入时显示含有参数文档和类型信息的小面板
  "editor.parameterHints.enabled": false,
  // 控制显示悬停提示前的等待时间
  "editor.hover.delay": 3000,
  // 资源管理器中将单个子文件夹压缩在组合的树元素中
  "explorer.compactFolders": false,
  // 取消打开文件时自动检测 Editor: Tab Size 和 Editor: Insert Spaces
  "editor.detectIndentation": false,
  // 保存时格式化(先 ESLint 后 Prettier)
  "editor.formatOnSave": true,

  // ESLint(.js .jsx)
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  // Prettier
  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[json]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[html]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[css]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // vetur
  // 设为 true 后就不提示 Vetur can't find tsconfig.json, jsconfig.json in /xxxx/xxxxxx. 了
  "vetur.ignoreProjectWarning": true
}
```

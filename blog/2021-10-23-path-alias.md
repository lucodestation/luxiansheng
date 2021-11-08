---
title: Vite 项目使用路径别名并在 VSCode 中显示路径提示
authors: luzhongwei
tags: [编辑器, VSCode, Vue, path, 路径, alias, 别名, Vite, 路径提示]
---

安装 Path Intellisense 扩展

VSCode 设置中添加

```json title="settings.json"
"path-intellisense.mappings":{
  "@":"${workspaceRoot}/src"
}
```

根目录下添加

```json title="jsconfig.json"
{
  "compilerOptions": {
    "target": "ES2021",
    "module": "commonjs",
    "allowSyntheticDefaultImports": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules"]
}
```

Vite 项目配置

```js title="vite.config.js"
import { createVuePlugin } from 'vite-plugin-vue2';

export default {
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
};
```

使用

```js
import Tags from '@/这里就会有路径提示';
```

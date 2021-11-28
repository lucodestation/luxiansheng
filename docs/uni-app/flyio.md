---
sidebar_position: 5
title: flyio fly.js
tags: [uni-app, flyio, fly.js, http, form data]
---

## 简介

Fly.js 是一个支持所有 JavaScript 运行环境的基于 Promise 的、支持请求转发、强大的 http 请求库。

目前 Fly.js 支持的平台包括：[Node.js](https://nodejs.org/zh-cn/)、[微信小程序](https://mp.weixin.qq.com/cgi-bin/wx)、Weex、[React Native](https://www.react-native.cn/)、Quick App 和浏览器，这些平台的 JavaScript 运行时都是不同的。

- npm 地址 https://www.npmjs.com/package/flyio
- GitHub 仓库 https://github.com/wendux/fly
- 中文文档 https://wendux.github.io/dist/#/doc/flyio/readme

> 小程序中不支持使用 axios，会报错 XMLHttpRequest is not a constructor。因为小程序的环境和浏览器的环境不一样。

## 在使用 uni-app 创建的微信小程序项目中使用

```js title="/request/fly.js"
import Fly from 'flyio/dist/npm/wx';
const fly = new Fly();
/* 
实例级配置

fly.config 默认值

fly.config = {
  baseURL: '',
  headers: {},
  method: 'GET',
  params: {},
  parseJson: true,
  timeout: 0,
  withCredentials: false
}
 */
// 实例级配置
fly.config.baseURL = 'https://api.github.com';

// 请求拦截器
fly.interceptors.request.use((request) => {
  console.log('请求拦截器');
  //可以显式返回 request, 也可以不返回，没有返回值时拦截器中默认返回 request
  return request;
});

// 响应拦截器，响应拦截器会在 then/catch 处理之前执行
fly.interceptors.response.use(
  (response) => {
    console.log('响应拦截器 response');
    // 只将请求结果的 data 字段返回
    return response.data;
  },
  (error) => {
    console.log('响应拦截器 error');
    // 发生网络错误（响应状态码非 2XX）后会走到这里
  }
);

export default fly;
```

## 请求示例

语法

```js
fly
  .request(
    // url 如果不是完整的 url，将会和 fly.config.baseURL 合并
    url,
    // 如果是 GET 请求，data 将作为查询字符串。
    // 如果是 POST 请求，data 将作为请求中的 body。
    data,
    // 单次请求配置。options 将会和请求拦截器中的 request 合并
    options
  )
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

示例

```js title="/request/index.js"
import fly from './fly.js';

const request = {};

request.foo = () => {
  fly
    .get(
      '/foo/12',
      { bar: 23 },
      {
        headers: {
          foobar: 'foobar'
        }
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

request.bar = () => {
  fly
    .post(
      '/foo/12?limit=10',
      { bar: 23 },
      {
        headers: { foobar: 'foobar' }
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

request.foobar = () => {
  fly
    .request(
      '/test/12?limit=10',
      { bar: 23 },
      {
        method: 'post',
        headers: { foobar: 'foobar' }
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default request;
```

对于如下这样一个 express 中的路由

```js
router.post('/test/:id', (req, res, next) => {
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  console.log(req.headers);
  res.status(200).json({
    code: 1, // 1 表示成功，0 表示失败/错误
    message: 'success',
    data: null
  });
});
```

最后一个请求中

- `req.query` 是 `{ limit: 10 }`
- `req.params` 是 `{ id: 12 }`
- `req.body` 是 `{ bar: 23 }`
- `{ foobar: 'foobar' }` 在 `req.headers` 中

## 使用 application/x-www-form-urlencoded 编码

Fly.js 默认的 `content-type` 为 `application/json;charset=UTF-8`，如果想以 `application/x-www-form-urlencoded` 编码格式发送，需在 `headers` 中将 `content-type` 设置为 `application/x-www-form-urlencoded`。

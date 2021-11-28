---
sidebar_position: 7
title: API Promise 化
tags: [uni-app, API, Promise]
---

1. 具体 [API Promise 化](https://uniapp.dcloud.io/api/README?id=api-promise-化) 的策略：
   - 异步的方法，如果不传入 `success`、`fail`、`complete` 等 `callback` 参数，将以 `Promise` 返回数据。
2. 不进行 `Promise 化` 的 [API](https://uniapp.dcloud.io/api/README?id=api-列表)：
   - 同步的方法（即以 `sync` 结束）。例如：`uni.getSystemInfoSync()`
   - 以 `create` 开头的方法。例如：`uni.createMapContext()`
   - 以 `manager` 结束的方法。例如：`uni.getBackgroundAudioManager()`

## 示例

getStorage

```js
async handleStorage() {
  // uni.getStorage 从本地缓存中异步获取指定 key 对应的内容。

  // 默认方式
  uni.getStorage({
    key: 'foo',
    success(result) {
      // 获取成功
      console.log(result) // {errMsg: "getStorage:ok", data: {…}}
    },
    fail(error) {
      // 获取失败
      console.log(error) // {errMsg: "getStorage:fail data not found"}
    },
  })

  // Promise
  uni.getStorage({ key: 'foo' }).then(data => {
    console.log(data)
    // 获取成功
    // [null, {errMsg: "getStorage:ok", data: {…}}]
    // 获取失败
    // [{errMsg: "getStorage:fail data not found"}]
    // data为一个数组
    // 数组第一项为错误信息 即为 fail 回调
    // 第二项为返回数据
    const [error, result] = data
  })

  // await
  const result = await uni.getStorage({ key: 'foo' })
  console.log(result)
  // 获取成功
  // [null, {errMsg: "getStorage:ok", data: {…}}]
  // 获取失败
  // [{errMsg: "getStorage:fail data not found"}]
},
```

从上面可以看出，无论是 `Promise` 方式还是 `await` 方式，都会返回一个数组，Promise 的结果都是成功的状态，也就意味着不需要处理 `catch` 的情况，因为永远不会失败。就很 nice 😁。

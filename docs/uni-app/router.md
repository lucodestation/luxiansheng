---
sidebar_position: 3
title: 路由与页面跳转示例
tags: [uni-app, router]
---

## navigateTo 和 navigateBack

- [uni.navigateTo](https://uniapp.dcloud.io/api/router)
  - 保留当前页面，跳转到应用内的某个页面，使用 `uni.navigateBack` 可以返回到原页面。
- uni.navigateBack
  - 关闭当前页面，返回上一页面或多级页面。可通过 [getCurrentPages()](https://uniapp.dcloud.io/api/window/window) 获取当前的页面栈，决定需要返回几层。
- uni.switchTab
  - 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

<!-- 首页 -->

```html title="/pages/index/index"
<template>
  <view>
    <view>首页</view>

    <button @click="handleNavigateToDetail(12)">navigate 详情</button>

    <button @click="handleRedirectToDetail(12)">redirect 详情</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    onLoad() {
      console.log('首页 onLoad');
    },
    onShow() {
      console.log('首页 onShow');
    },
    methods: {
      handleNavigateToDetail(id) {
        uni.navigateTo({
          // 绝对路径
          url: `/pages/detail/detail?id=${id}`
          // 相对路径
          // url: `../detail/detail?id=${id}`,
        });
      },
      handleRedirectToDetail(id) {
        uni.redirectTo({
          url: `/pages/detail/detail?id=${id}`
        });
      }
    }
  };
</script>
```

<!-- 详情 -->

```html title="/pages/detail/detail"
<template>
  <view>
    <view>详情</view>

    <button @click="handleNavigateBack">navigateBack 返回</button>

    <button @click="handleSwitchTabIndex">switchTab 首页</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    onLoad(option) {
      console.log('详情 onLoad', option);
    },
    onShow() {
      console.log('详情 onShow');
    },
    methods: {
      handleNavigateBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      handleSwitchTabIndex() {
        uni.switchTab({
          url: '/pages/index/index'
        });
      }
    }
  };
</script>
```

由于跳转前是在首页（`/pages/index/index` tabBar 页面），在详情（`/pages/detail/detail` 非 tabBar 页面）页面中无论是使用 `navigateBack` 还是 `switchTab` 来回到首页，都仅触发首页的 `onShow` [生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle)，不会触发 `onLoad` 生命周期。

`navigateBack` 和 `switchTab` 都会关闭当前页面，再次进入详情页面，详情页面的 `onLoad`、`onShow` 生命周期总是会触发。

## redirectTo

关闭当前页面，跳转到应用内的某个页面。

<!-- 首页 -->

```html title="/pages/index/index"
<template>
  <view>
    <view>首页</view>

    <button @click="handleRedirectToDetail(12)">redirect 详情</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    onLoad() {
      console.log('首页 onLoad');
    },
    onShow() {
      console.log('首页 onShow');
    },
    methods: {
      handleRedirectToDetail(id) {
        uni.redirectTo({
          url: `/pages/detail/detail?id=${id}`
        });
      }
    }
  };
</script>
```

<!-- 详情 -->

```html title="/pages/detail/detail"
<template>
  <view>
    <view>详情</view>

    <button @click="handleSwitchTabIndex">switchTab 首页</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    onLoad(option) {
      console.log('详情 onLoad', option);
    },
    onShow() {
      console.log('详情 onShow');
    },
    methods: {
      handleSwitchTabIndex() {
        uni.switchTab({
          url: '/pages/index/index'
        });
      }
    }
  };
</script>
```

## 声明式

上面示例是编程式路由，下面示例是声明式路由。

<!-- 首页 -->

```html title="/pages/index/index"
<template>
  <view>
    <view>首页</view>

    <!-- open-type 默认值是 navigate -->
    <navigator url="/pages/detail/detail?id=12">navigate 详情</navigator>

    <navigator url="/pages/detail/detail?id=12" open-type="redirect"
      >redirect 详情</navigator
    >
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    onLoad() {
      console.log('首页 onLoad');
    },
    onShow() {
      console.log('首页 onShow');
    },
    methods: {}
  };
</script>
```

```html title="/pages/detail/detail"
<template>
  <view>
    <view>详情</view>

    <navigator open-type="navigateBack" delta="1">返回</navigator>

    <navigator url="/pages/index/index" open-type="switchTab"
      >switchTab 首页</navigator
    >
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    onLoad(option) {
      console.log('详情 onLoad', option);
    },
    onShow() {
      console.log('详情 onShow');
    },
    methods: {}
  };
</script>
```

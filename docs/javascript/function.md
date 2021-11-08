---
sidebar_position: 5
title: Function
tags: [JavaScript, Function]
---

## 定义一个函数

```js
function foo() {}

const bar = function () {};

const foobar = () => {};
```

对象中的方法

```js
const obj = {
  foo: function () {},
  bar() {},
  foobar: () => {},
};
```

立即执行函数

```js
(function () {
  console.log(this); // undefined
})();

(() => {
  console.log(this); // undefined
})();
```

箭头函数如果要返回一个对象字面量形式的对象，这个对象要用圆括号括起来

```js
const foo = () => ({ id: 12, name: "Tom" });
console.log(foo());
```

- 箭头函数不能作为构造函数
- 箭头函数内部不能使用 `arguments`
- 箭头函数没有 `prototype` 属性

## 默认参数

```js
const fun = (a, b = 10) => a + b;
console.log(fun(3)); // 13
```

## 参数扩展与收集

```js
function foo() {
  console.log(arguments.length); // 4
}

foo(...[1, 2, 3, 4]);

function bar(...args) {
  console.log(args); // [1, 2, 3, 4]
}

bar(1, 2, 3, 4);
```
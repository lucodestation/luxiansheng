---
sidebar_position: 1
title: Number
tags: [JavaScript, Number]
---

```js
const a = 50;   // 十进制
const b = 050;  // 八进制
const c = 0x50; // 十六进制
```

## `Number()`

`Number()` 函数转换规则

- 布尔值，`true` 转换为 `1` ，`false` 转换为 `0` 。
- 数值，直接返回。
- `null` ，返回 `0` 。
- `undefined` ，返回 `NaN` 。
- 字符串，应用以下规则。
  - 如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值。因此，`Number("1")` 返回 `1` ，`Number("123")` 返回 `123` ，`Number("011")` 返回 `11`（忽略前面的零）。
  - 如果字符串包含有效的浮点值格式如 `"1.1"`，则会转换为相应的浮点值（同样，忽略前面的零）。
  - 如果字符串包含有效的十六进制格式如 `"0xf"`，则会转换为与该十六进制值对应的十进制整数值。
  - 如果是空字符串（不包含字符），则返回 `0` 。
  - 如果字符串包含除上述情况之外的其他字符，则返回 `NaN` 。
- 对象，调用 `valueOf()` 方法，并按照上述规则转换返回的值。如果转换结果是 `NaN` ，则调用 `toString()` 方法，再按照转换字符串的规则转换。

为什么要了解 `Number()` 函数转换规则呢？很多时候表达式中存在隐式转换，这个隐式转换规则就是遵循的 `Number()` 函数的转换规则。

有人出了一道题，怎么让 `a == 1 && a == 2 && a == 3` 的结果等于 `true` 。就可以利用 `Number()` 函数的转换规则来解决：

```js live
// 这里的代码可实时编辑

function () {

  let a = {
    n: 1,
    valueOf() {
      return this.n++;
    },
  };
  const result = a == 1 && a == 2 && a == 3;

  return result.toString();
}
```

要将一个变量隐式转换为数值，一般把这个变量乘以一 `a * 1` 就行了（或在变量前添加一元加操作符 `+a`），它也是遵循的 `Number()` 函数的转换规则。

如果是字符串转数值，可简单理解为，这个字符串整体看上去是数值，就可以转换为数值，整体看上去不是数值，就返回 `NaN` 。例如 `'32'` 整体看上去就是数值，而 `'32px'` 整体看上去就不是数值。

想把 `'32px'` 转换为数值应该使用 `parseInt()` 。

`Math.round()`、`Math.ceil()`、`Math.floor()`、`isNaN()` 应该都是**参考** `Number()` 函数的转换规则。

## `parseInt()`

`parseInt(string, radix)`

`parseInt()` 用于从字符串开头解析出整数，可以指定基数，基数必须是大于等于 2 且小于等于 36 的整数。

```js live
function () {

  const a = parseInt('32px', 10);
  const b = parseInt('ff', 16);

  return (<div>
    <p>a = {a}</p>
    <p>b = {b}</p>
  </div>);
}
```

## `Number.prototype.toString()`

`toString()` 和 `parseInt()` 正好相反，`toString()` 用于将数值转换为字符串，也是可以指定基数。

```js live
function () {

  const a = 255;

  return a.toString(16);
}
```

## `parseFloat()`

`parseFloat(string)`

`parseFloat()` 只能解析十进制值。

```js live
function () {
  return parseFloat('20.20');
}
```

## `Number.prototype.toFixed()`

`toFixed(fractionDigits)`

`toString()` 用户将数值转换为字符串，而`toFixed()` 用于将数值转换为字符串并可指定包含多少小数位。

```js live
function () {
  const a = 20;
  const b = 20.87654;
  const c = 20.87654;
  return (<div>
    <p>{ a.toFixed(2) }</p>
    <p>{ b.toFixed(2) }</p>
    <p>{ c.toString() }</p>
  </div>);
}
```

## `Math.round()`

`Math.round()` 用于对一个数值进行四舍五入。

```js live
function () {
  const a = 98.765;
  return Math.round(a);
}
```

## `Math.ceil()`

向上取整。

```js live
function () {
  const a = 98.765;
  return Math.ceil(a);
}
```

## `Math.floor()`

向下取整。

```js live
function () {
  const a = 98.765;
  return Math.floor(a);
}
```

## `Math.random()`

`Math.random()` 方法返回一个 0~1 范围内的随机数，其中包含 0 但不包含 1 。

获取随机整数：

```js live
function () {

  // 返回一个 lowerValue 到 upperValue 的随机整数（包含 lowerValue 和 upperValue）
  function selectFrom(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
  }


  return selectFrom(3, 5);
}
```

获取一个随机十六进制颜色值：

```js live
function () {
  return Math.random().toString(16).slice(-6);
}
```

## `Math.min()`

从一组数值中获取最小值

```js live
function () {
  return Math.min(5, 3, 7, -2, 0, 9);
}
```

## `Math.max()`

从一组数值中获取最大值

```js live
function () {
  return Math.max(5, 3, 7, -2, 0, 9);
}
```
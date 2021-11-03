---
sidebar_position: 2
title: String
tags: [JavaScript, String]
---

要将一个值转换为字符串可以使用 `Number()` 函数或使用几乎所有值都有的 `toString()` 方法。但最常用方法是用这个值加上一个空字符串。

```js live
// 这里的代码可实时编辑

function () {
  const a = 32;
  return (<div>
    <p>{ Number(a)    }</p>
    <p>{ a.toString() }</p>
    <p>{ a + ''       }</p>
  </div>);
}
```

## 从字符串中提取子字符串

### `String.prototype.slice()`

`slice(start, end)` 的第一个参数是提取开始位置，第二个参数是提取结束位置，提取的字符串不包括结束位置。

如果没有指定第二个参数，则提取到字符串的末尾。

如果参数为负值，则参数计算为这个负值加上字符串的长度。

```js live
function () {

  const str = 'Hello World';

  return (<div>
    <p>{ str.slice(1)      }</p>
    <p>{ str.slice(1, 3)   }</p>
    <p>{ str.slice(-4)     }</p>
    <p>{ str.slice(-4, -1) }</p>
  </div>);
}
```

### `String.prototype.substring()`

当 `substring(start, end)` 的参数为正值时，结果和 `slice(start, end)` 相同。

当参数为负值时，将参数转换为 0 。

```js live
function () {
  const str = 'Hello World';

  return (<div>
    <p>{ str.substring(1)    }</p>
    <p>{ str.substring(1, 3) }</p>
    <p>{ str.substring(-4)   }</p>
  </div>);
}
```

### `String.prototype.substr()`

`substr(from, length)` 的第一个参数表示提取开始位置，第二个参数表示提取的长度。

如果没有指定第二个参数，则提取到字符串的末尾。

如果第一个参数为负值，则参数计算为这个负值加上字符串的长度（和 `slice(start, end)` 相同）。

如果第二个参数为负值，将参数转换为 0 。

```js live
function () {
  const str = 'Hello World';

  return (<div>
    <p>{ str.substr(1)    }</p>
    <p>{ str.substr(1, 3) }</p>
    <p>{ str.substr(-4)   }</p>
  </div>);
}
```

## 获取字符串位置

`String.prototype.indexOf(searchString, position)`

`String.prototype.lastIndexOf(searchString, position)`

```js live
function () {
  const str = '每个字符串对象都有一个length 属性，表示字符串中字符的数量';

  return (<div>
    <p>{ str.indexOf('字符串')         }</p>
    <p>{ str.indexOf('字符串', 10)     }</p>
    <p>{ str.lastIndexOf('字符串')     }</p>
    <p>{ str.lastIndexOf('字符串', 10) }</p>
    <p>{ str.indexOf('string')         }</p>
    <p>{ str.lastIndexOf('string')     }</p>
  </div>);
}
```

## 判断是否包含某字符串

`String.prototype.startsWith(searchString, position)`

`String.prototype.endsWith(searchString, position)`

`String.prototype.includes(searchString, endPosition)`

```js live
function () {
  const str = 'vue element ui';

  const a =  str.startsWith('vue')
  const b =  str.startsWith('ui')
  const c =  str.endsWith('ui')
  const d =  str.endsWith('vue')
  const e =  str.includes('vue')
  const f =  str.includes('element')
  const g =  str.includes('javascript')

  return (<div>
    <p>{ a.toString() }</p>
    <p>{ b.toString() }</p>
    <p>{ c.toString() }</p>
    <p>{ d.toString() }</p>
    <p>{ e.toString() }</p>
    <p>{ f.toString() }</p>
    <p>{ g.toString() }</p>
  </div>);
}
```

## 去除前、后空格

`String.prototype.trim()`

`String.prototype.trimRight()` 或 `String.prototype.trimEnd()`

`String.prototype.trimLeft()` 或 `String.prototype.trimStart()`

## 重复字符串

`String.prototype.repeat(count)` 重复复制字符串多少次，参数表示重复的次数。

```js live
function () {
  const str = 'PHP ';

  return str.repeat(5);
}
```

`String.prototype.padStart(maxLength， fillString)` 或 `String.prototype.padEnd(maxLength， fillString)` 用于将一个指定的字符串添加到原字符串中使其达到指定的长度，返回一个新的字符串。

```js live
function () {
  const str = '10010';

  return (<div>
    <p>{ str.padStart(8, '0') }</p>
    <p>{ str.padEnd(8, '23')  }</p>
  </div>);
}
```
## 大小写转换

`String.prototype.toLowerCase()` 转换为小写。

`String.prototype.toUpperCase()` 转换为大写。

## 字符串顺序比较

`String.prototype.localeCompare()`

- 如果按照字母表顺序，字符串应该排在字符串参数前头，则返回负值。（通常是 -1，具体还要看与实际值相关的实现。）
- 如果字符串与字符串参数相等，则返回 0。
- 如果按照字母表顺序，字符串应该排在字符串参数后头，则返回正值。（通常是 1，具体还要看与实际值相关的实现。）

字符串可以使用 for of 循环迭代

## 字符串转数组

`split()` 将字符串拆分成数组。

```js
const str = '1, 2, 3';

console.log([...str]); // ['1', ',', ' ', '2', ',', ' ', '3']

console.log(str.split(', ')) // ['1', '2', '3']

// 指定返回数组的长度
console.log(str.split(', ', 2)) // ['1', '2']
```

> `split()` 第一个参数还支持正则表达式。
> 
> 字符串可以使用 `for of` 进行迭代。

## 模式匹配

match(regexp | RegExp) 本质上同 RegExp 对象的 exec() 方法。

```js live
function () {
  const text = "cat, bat, sat, fat";

  const pattern = /.at/;

  const matches = text.match(pattern); // 等价于 pattern.exec(text)

  return (<div>
    <p>{ matches.index }</p>
    <p>{ matches[0] }</p>
  </div>);
}
```

```js live
function () {
  const text = "cat, bat, sat, fat";

  return (<div>
    <p>{ text.search(/at/)  }</p>
    <p>{ text.search(/foo/) }</p>
  </div>);
}
```

## 字符串替换

```js live
function () {
  const text = "cat, bat, sat, fat";

  return (<div>
    <p>{ text.replace(/at/, 'xyz')  }</p>
    <p>{ text.replace(/at/g, 'xyz') }</p>
  </div>);
}
```

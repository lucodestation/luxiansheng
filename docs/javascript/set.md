---
sidebar_position: 4
title: Set
tags: [JavaScript, Set]
---

## 初始化集合

```js
const s = new Set(["foo", "bar"]);
console.log(s); // Set(2) {'foo', 'bar'}
```

## 获取元素数量

```js
console.log(s.size); // 2
```

`size` 属性是只读的，尝试修改会报错。

## 添加元素

```js
console.log(s.add('foobar')); // Set(3) {'foo', 'bar', 'foobar'}
```

`add()` 方法返回集合自身，所以可是链式调用

```js
s.add('a').add('b').add('c');
```

Set 集合元素具有唯一性，添加同一元素仅保留一个该元素

```js
const s = new Set(["foo", "bar"]);
console.log(s); // Set(2) {'foo', 'bar'}
s.add("foo");
console.log(s); // Set(2) {'foo', 'bar'}
```

`add()` 方法一次只能添加一个元素

```js
const s = new Set();
s.add("foo", "bar");
console.log(s); // Set(1) {'foo'}
```

## 查看是否包含某元素

```js
const s = new Set(["foo", "bar"]);
console.log(s.has("foo")); // true
console.log(s.has("cat")); // false
```

## 删除元素

```js
const s = new Set(["foo", "bar"]);
console.log(s.delete("foo")); // true
console.log(s.delete("cat")); // false
console.log(s); // Set(1) {'bar'}
```

## 清空集合

```js
const s = new Set(["foo", "bar"]);
console.log(s.clear()); // undefined
console.log(s); // Set(0) {size: 0}
```

## 遍历

```js
const s = new Set(["foo", "bar"]);

for (const value of s) {
  console.log(value);
}

s.forEach((value) => console.log(value));
```

## 转数组

```js
const s = new Set(["foo", "bar"]);
console.log([...s]); // ['foo', 'bar']
```
---
sidebar_position: 1
title: Array
tags: [JavaScript, Array]
---

## 创建数组

```js
const arr1 = new Array(1, 2, 3);
const arr2 = new Array(3);
const arr3 = [1, 2, 3];
const arr4 = [...'abc']; // ['a', 'b', 'c']，可实现浅复制
const arr5 = Array.from('abc', i => i + '-'); // ['a-', 'b-', 'c-']，参数为可迭代对象，第二个函数参数会迭代数组的每一项（可对其进行二次处理）。可实现浅复制
const arr6 = Array.of(1, 2, 3); // [1, 2, 3]，用于代替 Array.prototype.slice.call(arguments)
const arr = ['foo', 'bar'];
const arr7 = [arr.keys()];
const arr8 = [arr.values()];
const arr9 = [arr.aEntries()]; // [[0, 'foo'], [1, 'bar']]
const arr10 = Array(3).fill('foo'); // ['foo', 'foo', 'foo']
```
## 判断是否是数组

`Array.isArray()`

## 复制和填充方法

`fill(value, start, end)`

```js live
// 这里的代码可实时编辑

function () {
  const arr = Array(8);

  // 用 5 填充数组所有项
  const arr1 = [...arr.fill(5)];
  // 用 6 填充索引大于等于 3 的元素
  const arr2 = [...arr.fill(6, 3)];
  // 用 7 填充索引大于等于 2 且小于 4 的元素
  const arr3 = [...arr.fill(7, 2, 4)];
  // 用 8 填充索引大于等于 1 且小于 4 的元素
  // 负值加上数组长度
  const arr4 = [...arr.fill(8, -4, -1)];

  return (<div>
    <p>[ { arr1.join(', ') } ]</p>
    <p>[ { arr2.join(', ') } ]</p>
    <p>[ { arr3.join(', ') } ]</p>
    <p>[ { arr4.join(', ') } ]</p>
  </div>);
}
```

`copyWithin(target, start, end)`

```js live
function () {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 复制索引 0 开始的内容，插入到索引 5 开始的位置
  const arr1 = [...arr.copyWithin(5)];
  // 复制索引5 开始的内容，插入到索引0 开始的位置
  const arr2 = [...arr.copyWithin(0, 5)];
  // 复制索引0 开始到索引3 结束的内容
  const arr3 = [...arr.copyWithin(4, 0, 3)];
  const arr4 = [...arr.copyWithin(-4, -7, -3)];


  return (<div>
    <p>[ { arr1.join(', ') } ]</p>
    <p>[ { arr2.join(', ') } ]</p>
    <p>[ { arr3.join(', ') } ]</p>
    <p>[ { arr4.join(', ') } ]</p>
  </div>);
}
```

## 栈、堆

### 栈 push pop

push() 方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度。

。pop()方法用于删除数组的最后一项，同时减少数组的length 值，返回被删除的项。

### 堆 unshift shift

unshift() 在数组开头添加任意多个值，然后返回新的数组长度。

shift() 删除数组的第一项并返回它，然后数组长度减1。

## 排序

reverse()

sort()

未完...

toString
slice
splice
indexOf
lastIndexOf
includes
find
findIndex

every
filter
forEach
map
some
reduce
reduceRight
for of
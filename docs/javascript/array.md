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
() => {
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
() => {
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

## toString

`toString()` 返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串（逗号后不含空格）。也就是说，对数组的每个值都会调用其 `toString()` 方法，以得到最终的字符串。

```js
console.log(["a", 2, "c"].toString()); // a,2,c
```

## 栈、堆

### 栈 push pop

push() 方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度。

。pop()方法用于删除数组的最后一项，同时减少数组的length 值，返回被删除的项。

### 堆 unshift shift

unshift() 在数组开头添加任意多个值，然后返回新的数组长度。

shift() 删除数组的第一项并返回它，然后数组长度减1。

## 排序

`reverse()` 将数组元素反向排列。

`sort()` 会在每一项上调用 `String()` 转型函数，然后比较字符串来决定顺序。即使数组的元素都是数值，也会先把数组转换为字符串再比较、排序。

`sort()` 方法可以接收一个比较函数，用于判断哪个值应该排在前面。比较函数接收两个参数，如果第一个参数应该排在第二个参数前面，就返回负值；如果两个参数相等，就返回 0 ；如果第一个参数应该排在第二个参数后面，就返回正值。

```js
// 升序
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
```

如果数组元素是数值，这个比较函数还可以进一步简化。

```js
function compare(value1, value2){
  return value2 - value1;
}
```

对象数组按年龄排序示例：

```js live
() => {
  const arr = [
    { id: 13, name: "tom", age: 32 },
    { id: 14, name: "tom", age: 35 },
    { id: 15, name: "tom", age: 28 }
  ];

  return JSON.stringify(arr.sort((a, b) => a.age - b.age));
}
```

## `slice()`

`slice(start, end)` 的第一个参数是提取开始位置，第二个参数是提取结束位置，提取的数组元素不包括结束位置。

如果没有指定第二个参数，则提取到数组的末尾。

如果参数为负值，则参数计算为这个负值加上数组的长度。


## `splice()`

### 删除

`splice(start, deleteCount)`

```js live
() => {
  const arr = ["a", "b", "c", "d", "e"];
  arr.splice(1, 3)
  return JSON.stringify(arr);
}
```

### 插入

`splice(start, deleteCount, ...items)`

```js live
() => {
  const arr = ["a", "b", "c", "d", "e"];
  arr.splice(1, 0, 'x', 'y')
  return JSON.stringify(arr);
}
```

### 替换

`splice(start, deleteCount, ...items)`

```js live
() => {
  const arr = ["a", "b", "c", "d", "e"];
  arr.splice(1, 2, 'x', 'y')
  return JSON.stringify(arr);
}
```

<!-- indexOf
indexOf(searchElement, fromIndex)
lastIndexOf
lastIndexOf(searchElement, fromIndex)
includes
includes(searchElement, fromIndex)
find
find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any)
findIndex
findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any) -->

every
filter
forEach
map
some
reduce
reduceRight
for of

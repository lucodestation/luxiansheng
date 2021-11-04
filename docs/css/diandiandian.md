---
sidebar_position: 1
title: 文本溢出显示点点点省略号
tags: [CSS, 点点点, 省略号]
---

## 单行

```css
.box {
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

```jsx live
<div class="box" style={{
  width: '170px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}}>
  这是一行很长很长的文字。
</div>
```

## 多行

```css
.box {
  width: 100px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
```
```jsx live
<div style={{
  width: '120px',
  display: '-webkit-box',
  overflow: 'hidden',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': '2'
}}>
  这是一行很长的文字，一行可能放不下哦。
</div>
```
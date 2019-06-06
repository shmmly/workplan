# javascript 基础

## javascript 规定了几种类型结构

```
javascript中规定了 number string boolean null symbol undefined 6种原值类型。
```

## javascript 对象的底层数据结构是什么

```
javascript中对象是有堆和栈组成，堆中存放对象的内容，栈中存放改对象在堆中的地址
```

## Symbol 在实际开发中的应用，手动实现一个简单的 Symbol

```

```

## javascript 中的变量在内容中的具体存储形式

## 基本类型对应的内置对象，以及他们之间的装箱拆箱操作

## 理解值类型和引用类型

## null 和 undefined 的区别

## 至少可以说出三种判断 JavaScript 数据类型的方式，以及他们的优缺点，如何准确的判断数组类型

## 可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用

## 出现小数精度丢失的原因，JavaScript 可以存储的最大数字、最大安全数字，JavaScript 处理大数字的方法、避免精度丢失的方法

## onClick 和 addEventListener 的区别

- addEventListener
  addEventListener 可以传入三个参数 分别是事件类型，事件处理函数，以及对应的 options
  options 包含：capture(捕获)，once(是否调用一次，如果是 true 那么在调用一次之后就会被自动的 remove 这个监听函数),
  passive(被动，如果是 true 那么就会对应的处理函数 永远不会调用 preventDefault)
  下面我们用一个 demo 来演示下 这个方法的使用

```js
//html
;<div id="parent">
  <button id="ceshi" type="submit">
    ceshi
  </button>
</div>

//javascript
const dom = document.getElementById('ceshi')
const par = document.getElementById('parent')
dom.addEventListener(
  'click',
  () => {
    console.log('click')
  },
  {
    //   capture: true,
    //   passive: false
  }
)
par.addEventListener(
  'click',
  () => {
    console.log('我是上层元素')
  },
  {
    capture: false,
    once: true
  }
)
```

在这个案例中，我们父子 2 层 dom 中 都绑定了对应的 click 事件，我们设置父级的 capture 为 true 意味着 我们这个函数 是在捕获阶段运行的
我们会发现 打印内容的顺序是 div---button 说明优先执行了 div 的 click 事件。同样的如果设置为 false，就会在冒泡的时候触发对应的方法，
所以 打印内容的顺序是 bottom---div。
顺便如果我们的 once 为 true 的时候，发现这个函数只会执行一次。

- addEventListener 可以进行多次绑定，但是onclick只能进行一次绑定，后面的绑定会覆盖前面的绑定
- addEventListener可以对任何dom有效，而onclick只能对html生效
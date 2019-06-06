# Vue

[vue 官方文档](https://cn.vuejs.org/)

## 父子/兄弟之间的组件数据传递

### 父子数据传递

- 这是最简单和明朗的一种方式，我们直接使用 props 属性就可以将数据从父级组件传递给子组件。下面我们简单的用代码示例下

🌰 一

```js
//parent.vue
<template>
    <Child value='i am parent value'></Child>
</template>
<script>
import Child from 'xxxx'
    export default {
        component:[
            Child
        ]
    }
</script>
```

```js
//children.vue
<template>
    <div>{{value}}</div>
</template>
<script>
    export default {
        props:['value']
    }
</script>
```

运行代码，我们可以看到页面显示 'i am parent value' ,父子的数据传递就是这样简单
::: tip 思考？
在 🌰 一里面 我们传递了一个固定的 string 给子组件，通常情况下 我们是不会传递一个固定的参数给子组件的，
一般都是传递一个动态的数据给子组件来渲染。
所以我们需要在 parent 中的 data 定义一个变量，然后 binding 到对应的子组件的 props 属性上面。
:::
下面是我们修改之后的代码

```js
<template>
    <Child v-bind:value="pValue"></Child>
</template>
<script>
import Child from 'xxxx'
    export default {
        component:[
            Child
        ],
        data:{
            return{
                pValue:'i am parent value'
            }
        }
    }
</script>
```

### 子组件传递数据给父组件

- 在 vue 中父传子可使用 props 属性传递，子传父需要通过事件监听的方式去完成

```js
//parent.vue
<template>
    <Child value='i am parent value' v-on:childChange={handleChange}></Child>
</template>
<script>
import Child from 'xxxx'
    export default {
        component:[
            Child
        ],
        method:{
            handleChange(value){
                console.log(this.value)
            }
        }
    }
</script>
```

```js
//children.vue
<template>
    <div>{{value}}</div>
</template>
<script>
    export default {
      data(){
          return {
              childrenValue:' i am children value'
          }
      },
      method:{
          onClick(){
              this.$emit('childChange',this.childrenValue)
          }
      }
    }
</script>
```

从上面代码可以看出 子传父分 2 步：

- 子组件通过 this.$emit 提交事件名称以及对应的参数
- 父组件监听子组件触发的事件名称，获取到对应的参数

### 兄弟组件之间的数据传递

这个就比较麻烦了，这里大概的提供一下几个方案

- 以父级组件为媒介
- 使用 eventbus 为媒介
- 使用 provide/inject 全局 props
- 使用 vuex 进行数据管理

> 🌰 父级组件作为媒介

```js
//parent
<template>
  <div>
    <BOne
      :parentValue='middle'
      @change='handleOne'
    ></BOne>
    <BTwo
      :parentValue='middle'
      @change='handleTwo'
    ></BTwo>
  </div>
</template>
<script>
import BOne from "./BrotherOne";
import BTwo from "./BotherTwo";
export default {
  components: {
    BOne,
    BTwo
  },
  data(){
    return{
      middle: "12"
    }
  },
  methods: {
    handleOne(value) {
      this.middle = value;
    },
    handleTwo(value) {
      this.middle = value;
    }
  }
};
</script>
```

```js
//brotherOne
<template>
  <div>
    <button @click='handleClick'>One</button>
    One---{{parentValue}}
  </div>

</template>
</template>
<script>
export default {
  props: ["parentValue"],
  data() {
    return {
      value: "我是one"
    };
  },
  methods: {
    handleClick() {
      this.$emit("change", this.value);
    }
  }
};
</script>
```

```js
//brotherTwo
<template>
<div>
  <button @click='handleClick'>two</button>
  Two---{{parentValue}}
</div>

</template>
<script>
export default {
  props: ["parentValue"],
  data(){
    return {
      value: '我是two'
    }
  },
  methods: {
    handleClick() {
      this.$emit("change", this.value);
    }
  }
};
</script>
```

通过这个实例 我们应该可以了解到如果使用父组件作为媒介，使得兄弟组件之间可以互相通信

> 🌰 使用 eventBus 作为媒介

```js
//eventbus.js
import Vue from 'vue'
export default new Vue()
```

```js
<template>
  <div>
    <button @click='handleClick'>我是brotherOne</button>
    {{value}}
  </div>
</template>
</template>
<script>
import evnetBus from "../eventbus/eventbus";
export default {
  data() {
    return {
      value: "我是one"
    };
  },
  methods: {
    handleClick() {
      evnetBus.$emit("change", this.value);
    }
  },
  created: function() {
    evnetBus.$on("change", value =>{
      console.log(value);
      this.value = value;
    });
}}
</script>
```

```js
<template>
  <div>
    <button @click='handleClick'>我是brotherTwo</button>
    {{value}}
  </div>

</template>
<script>
import evnetBus from "../eventbus/eventbus";
export default {
  data() {
    return {
      value: "我是two"
    };
  },
  methods: {
    handleClick() {
      evnetBus.$emit("change", this.value);
    }
  },
  created: function() {
    evnetBus.$on("change", value => {
      console.log(value);
      this.value = value;
    });
  }
};
</script>
```

父组件没有任何变化。

::: tip 建议优化
这基本上就是 eventbus 的使用方法，当然处于性能考虑，我们应该在 beforeDestory 声明周期中调用$off 来释放监听。
附上官网对应的介绍[eventbus](https://cn.vuejs.org/v2/guide/migration.html#dispatch-%E5%92%8C-broadcast-%E6%9B%BF%E6%8D%A2)
:::

## 路由之间的切换以及导航守卫的使用

## axios/fetch 异步请求

## vuex 的数据管理

## slot 插槽的使用案例

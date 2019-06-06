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
- 在vue中父传子可使用props属性传递，子传父需要通过事件监听的方式去完成

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





## 路由之间的切换以及导航守卫的使用

## axios/fetch 异步请求

## vuex 的数据管理

## slot 插槽的使用案例

# hooks

官方提供了如下 api：

- useState
- useEffect
- useRef
- useContext
- useReducer

## useState

使用过 react 的同学都知道，函数组建中是没有办法存在自己的 state。只有在 class 组建中可以使用 state 来存储自身的一些属性。
所以 useState 的作用就是为了让函数组件也能够存储自己的属性。

但是我们需要注意一下几点：

::: tip
useState 只会在组件加载的时候 执行一次 且只会执行一次。

useState 如果使用 setXX 方法的时候，state 的值没有发生变化，也不会引发组件的重新 render。
:::

下面我们举几个 🌰 (项目代码 全部使用 typescript )

🌰
```js{12}
const Message: FC<{ message: string }> = ({ message }) => {
  const [msg, setMsg] = useState < number > message
  useEffect(() => {
    setMsg(33)
  })

  return <h1>{msg}</h1>
}

const App: React.FC = () => {
  const [msg, setMsg] = useState < number > 0

  return (
    <div className="App">
      <button onClick={() => setMsg(msg + 1)}>改变父级的msg</button>
      <Message message={msg} />
    </div>
  )
}
```

运行上面的代码，我们会发现 只有在第一次 Message 组件初始化的时候，运行了 useState 函数，并将父级组件的 message 参数作为初始值。
当点击父级组件的按钮改变 message 的时候，发现子组件的 msg 没有发生任何的改变。

::: tip 结论
 useState 只会在组件初始化的时候 执行一次
:::

稍微修改下上面的代码

🌰🌰
```js{14}

const App: React.FC = () => {
  const [msg, setMsg] = useState < string > 'first'

  return (
    <div className="App">
      <button onClick={() => setMsg(msg)}>改变父级的msg</button>
      <Message message={msg} />
    </div>
  )
}
```
随便我们怎么点击 按钮，组件根本不会发生重新渲染
::: tip 结论
如果state没有发生变化，组件不会重新渲染
:::

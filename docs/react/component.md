# Component
 Component 的三种创建方式

- React.createClass 最原始的写法
- React.Component es6的写法
- React.SFC 无状态组件的写法
- React.PureComponent 纯组件，是优化react的一个重要方法之一

这里我们用一个Loading的组件例子来演示用法

## React.createClass
::: danger
 这个方法很尴尬，本来想新建一个项目使用这个方法，来演示下用法的，
 但是启动之后发现，提示 createClass is not a function,才发现
 最新的react已经不支持这种写法了。所以这里就不贴例子了，有兴趣的可以百度或者google下用法
:::
## React.Component
```chef
import React from "react";
import logo from "../../logo.svg";
import "./index.css";

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: this.props.Loading
        };
    }

    handleClick = e => {
        setTimeout(() => {
            this.setState({
                loading: !this.state.loading
            });
        }, 1000)
    };

    render() {
        const {loading} = this.state;
        return (
            <div>
                {loading ? (
                    <img src={logo} className="App-logo" alt="logo"/>
                ) : (
                    "数据加载完毕"
                )}
                <button onClick={this.handleClick}>点击加载数据</button>
            </div>
        );
    }
}
```
这里我们使用了React.Component,这是es6的写法，可以看到我们handleClick方法也使用es6语法，
这样大大的减少了代码量，提高了可读性。

在React.Component 中，如果要使用默认的props 区别于React.createClass
::: warning
在React.createClass 中，我们需要使用getDefaultProps 这个方法来实现默认的props
而在React.Component 中，我们可以直接使用 static defaultProps 这个静态变量来定义 默认的props
:::

::: tip
 这个例子中我们没有使用props，而是使用了state在管理自身的状态。
:::

## React.SFC 
```chef
import logo from "../../logo.svg"
import React from "react"

const Loading  = ({loading=false})=>(
    <div>
        {loading?(<div>
            <img src={logo} className="App-logo" alt="logo"/>
        </div>) :('数据加载完毕')}
    </div>
)

export default Loading
```
这个例子中我们使用了es6的解构、默认赋值、箭头函数等语法，
可以看到无状态组件的写法非常的简单，这意味着他并不管理任何的状态，只需要接收
父组件传递的props来展示props的内容就够了

::: danger
需要注意的是无状态组件不支持ref属性，因为在调用之前，组件并不会被初始化。所以没有办法使用ref来获取组件中的dom属性。
:::

## React.PureComponent 
如果要学会用这个组件，首先我们需要理解下它的原理,先看下下面这段代码
```chef
import React from "react"
export default  class Todo extends  React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            items:[1,2,3,4]
        }
    }
    handleClick=()=>{
        const {items} = this.state
        items.pop()
        this.setState({
            items
        })
    }
    render(){
        return (
            <div>
                <ul>
                    {this.state.items.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button onClick={this.handleClick}>delete</button>
            </div>
        )
    }
}
```
运行之后，我们发现无论怎么点击，li的数量都没有发送改变，那么是什么原因呢？
让我们整理下思路哈哈~·

在我们react中，如果执行setState操作，那么下面的生命周期应该是shouldComponentUpdate,
这个方法返回true或者false，来执行下面的操作，决定是否进行render操作。
那么我们大胆的假设下，现在li 没有减少 是不是由于没有进行render操作，所以shouldComponentUpdate 肯定返回的就是一个false，
如果我们在上面的代码中，重写所以shouldComponentUpdate 并返回true，然后我们继续运行下,可以发现，li 正常的减少了
如果你在PureComponent 组件中使用了所以shouldComponentUpdate生命周期，react也会出现这样的提示
::: warning
index.js:2178 Warning: Todo has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. 
Please extend React.Component if shouldComponentUpdate is used.
:::
大意就是，你都用PureComponent组件了，你还去实现shouldComponentUpdate 这个生命周期，干嘛不直接用Component组件呢~~好吧确实有点多此一举的赶脚!!

这里推荐一篇文件，讲解了PureComponent的一些知识[PureComponent](http://www.wulv.site/2017-05-31/react-purecomponent.html)







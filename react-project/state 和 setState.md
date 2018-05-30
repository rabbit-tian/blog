### 组件的 state 和 setState
1.  isLiked 存放在实例的 state 对象当中，这个对象在构造函数里面初始化。这个组件的 render 函数内，会根据组件的 state 的中的isLiked不同显示“取消”或“点赞”内容。并且给 button 加上了点击的事件监听。

    ```
    import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import './index.css'
    
    class LikeButton extends Component {
      constructor () {
        super()
        this.state = { isLiked: false }
      }
    
      handleClickOnLikeButton () {
        this.setState({
          isLiked: !this.state.isLiked
        })
      }
    
      render () {
        return (
          <button onClick={this.handleClickOnLikeButton.bind(this)}>
            {this.state.isLiked ? '取消' : '点赞'} 👍
          </button>
        )
      }
    }
    ...
    ```
2. 最后构建一个 Index ，在它的 render 函数内使用 LikeButton 。然后把 Index 渲染到页面上：
    
    ```
    ...
    class Index extends Component {
      render () {
        return (
          <div>
            <LikeButton />
          </div>
        )
      }
    }
    
    ReactDOM.render(
      <Index />,
      document.getElementById('root')
    )
    ``` 

### setState 接受对象参数
1. 在 handleClickOnLikeButton 事件监听函数里面，大家可以留意到，我们调用了 setState 函数，每次点击都会更新 isLiked 属性为 !isLiked，这样就可以做到点赞和取消功能。
2. setState 方法由父类 Component 所提供。当我们调用这个函数的时候，React.js 会更新组件的状态 state ，并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。
3. 注意，当我们要改变组件的状态的时候，不能直接用 this.state = xxx 这种方式来修改，如果这样做 React.js 就没办法知道你修改了组件的状态，它也就没有办法更新页面。所以，一定要使用 React.js 提供的 setState 方法，它接受一个对象或者函数作为参数。
4. 传入一个对象的时候，这个对象表示该组件的新状态。但你只需要传入需要更新的部分就可以了，而不需要传入整个对象。例如，假设现在我们有另外一个状态 name ：因为点击的时候我们并不需要修改 name，所以只需要传入 isLiked 就行了。Tomy 还是那个 Tomy，而 isLiked 已经不是那个 isLiked 了。

    ```
      constructor (props) {
        super(props)
        this.state = {
          name: 'Tomy',
          isLiked: false
        }
      }
    
      handleClickOnLikeButton () {
        this.setState({
          isLiked: !this.state.isLiked
        })
      }
    ...
    ```


### setState 接受函数参数
1. React.js 会把上一个 setState 的结果传入这个函数，你就可以使用该结果进行运算、操作，然后返回一个对象作为更新 state 的对象：
    
    ```
      handleClickOnLikeButton () {
        this.setState((prevState) => {
          return { count: 0 }
        })
        this.setState((prevState) => {
          return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
        })
        this.setState((prevState) => {
          return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
        })
        // 最后的结果是 this.state.count 为 3
      }
    ```
### setState 合并
1. 上面我们进行了三次 setState，但是实际上组件只会重新渲染一次，而不是三次；这是因为在 React.js 内部会把 JavaScript 事件循环中的消息队列的同一个消息中的 setState 都进行合并以后再重新渲染组件。



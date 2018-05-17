### 组件的 render 方法
1. render 基础
    - 一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素
    - 要注意的是，必须要用一个外层的 JSX 元素把所有内容包裹起来
    - 返回并列多个 JSX 元素是不合法的，必须要用一个外层元素把内容进行包裹：
    
    ```
    render () {
      return (
        <div>
          <div>第一个</div>
          <div>第二个</div>
        </div>
      )
    }
    ```
2. 表达式插入
    - 在 JSX 当中你可以插入 JavaScript 的表达式，表达式返回的结果会相应地渲染到页面上。表达式用 {} 包裹
    
    ```
    render () {
        const special = 'nice';
        const className = 'header'
        return (
            <div className={className}>
                <h1>Tian {special}</h1>
            </div>
        )
    }
    ```
    
    - {} 内可以放任何 JavaScript 的代码，包括变量、表达式计算、函数执行等等
    - 表达式插入不仅仅可以用在标签内部，也可以用在标签的属性上
        - 注意：因为 class 是 JavaScript 的关键字，所以 React.js 中定义了一种新的方式：className 来帮助我们给元素添加类名
        - 还有一个特例就是 for 属性，例如 <label for='male'>Male</label>，因为 for 也是 JavaScript 的关键字，所以在 JSX 用 htmlFor 替代

    - {} 上面说了，JSX 可以放置任何表达式内容。所以也可以放 JSX
    
    ```
    render () {
      const isGoodWord = true
      return (
        <div>
          <h1>
            React 小书
            {isGoodWord
              ? <strong> is good</strong>
              : <span> is not good</span>
            }
          </h1>
        </div>
      )
    }
    ```




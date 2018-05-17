### 安装环境

1. 安装 node.js 环境包括 npm
2. 安装好环境以后，只需要按照官网的指引安装 create-react-app 即可。
    - `npm install -g create-react-app`
3. 这条命令会往我们的机器上安装一条叫 create-react-app 的命令，安装好以后就可以直接使用它来构建一个 react 的前端工程：
    - `create-react-app hello-react `

4. 通过 npm 启动工程：
    - `cd hello-react   npm start`


### 入手项目
1. `src/index.js` 中的代码
    
    ```
    // 必备两条
    /*
    1. 我们在文件头部从 react 的包当中引入了 React 和 React.js 的组件父类 Component。
    2. ReactDOM 可以帮助我们把 React 组件渲染到页面上去
    */
    
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    
    
    import './index.css'
    
    class Header extends Component {
      render () {
        return (
          <div>
            <h1>React 小书</h1>
          </div>
        )
      }
    }
    
    ReactDOM.render(
      <Header />,
      document.getElementById('root')
    )
    ```


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

### 组件的组合、嵌套和组件树
1. 现在我们已经有了 Header 组件了。假设我们现在构建一个新的组件叫 Title，它专门负责显示标题。你可以在 Header 里面使用 Title组件：
    
    ```
    class Title extends Component {
        render () {
            return (
                <h1>React 小书</h1>
            )
        }
    }
    
    class Header extends Components {
        render () {
            return (
                <div>
                    <Title />
                </div>
            )
        }
    }
    ```
        - 我们可以直接在 Header 标签里面直接使用 Title 标签
        ```
        <div>
          <Title />
          <Title />
          <Title />
        </div>
        ```
        
        - 注意：自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头。

2. 现在让组件多起来。我们来构建额外的组件来构建页面，假设页面是由 Header 、Main 、Footer 几个部分组成，由一个 Index 把它们组合起来。
    
    ```
    import React,{Component} from 'react';
    import ReactDOM from 'react-dom';

    // 标题
    class Title extends Component {
        render () {
            return (
                <h1>Tian</h1>
            )
        }
    }
    // 头部
    class Header extends Component {
        render () {
            return (
                <div>
                    <Title/>
                    <h2>this is header</h2>
                </div>
            )
        }
    }
    // 主体
    class Main extends Component {
        render () {
            return (
                <div>
                    <h2>this is content</h2>
                </div>
            )
        }
    }
    // 底部
    class Footer extends Component {
        render () {
            return (
                <div>
                    <h2>this is footer</h2>
                </div>
            )
        }
    }

    // 整合到 Index
    class Index extends Component {
        render () {
            return (
                <div>
                    <Header/>
                    <Main />
                    <Footer />
                </div>
            )
        }
    }
    ReactDOM.render(
        <Index />,
        document.getElementById('root')
    )

    ```
    
### 事件监听
1. 你只需要给需要监听事件的元素加上属性类似于 onClick、onKeyDown 这样的属性
    
    ```
    // 事件监听
    class Title extends Component {
        isCLick() {
            console.log(11);
        }
        render () {
            return (
                <h1 onClick = {this.isCLick}> Tian</h1>
            )
        }
    }
    ```
2. event 对象
    - 和普通浏览器一样，事件监听函数会被自动传入一个 event 对象，这个对象和普通的浏览器 event 对象所包含的方法和属性都基本一致。不同的是 React.js 中的 event 对象并不是浏览器提供的，而是它自己内部所构建的。React.js 将浏览器原生的 event 对象封装了一下，对外提供统一的 API 和属性
    - 每次点击的时候就会打印  ”React 小书“。
    
    ```
    class Title extends Component {
      handleClickOnTitle (e) {
        console.log(e.target.innerHTML)
      }
    
      render () {
        return (
          <h1 onClick={this.handleClickOnTitle}>React 小书</h1>
        )
      }
    }
    ```

3. 关于事件中的 this
    - 在上面的 handleClickOnTitle 中把 this 打印出来，你会看到 this 是 null 或者 undefined。

        ```
        handleClickOnTitle (e) {
            console.log(this) // => null or undefined
        }
        ```
    - 如果你想在事件函数当中使用当前的实例，你需要手动地将实例方法 bind 到当前实例上再传入给 React.js。
        
        ```
        // this的正确姿势
        // bind 会把实例方法绑定到当前实例上，然后我们再把绑定后的函数传给 React.js 的 onClick 事件监听
        // 可以在 bind 的时候给事件监听函数传入一些参数：
        class Title extends Component {
            isClick (word,e) {
                console.log(this,word) 
            }
            render () {
                return (
                    <h1 onClick = {this.isClick.bind(this,'hello')}>Tian</h1>
                )
            }
        }
        ```

### 组件的 state 和 setState
    



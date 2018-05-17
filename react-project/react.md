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
    



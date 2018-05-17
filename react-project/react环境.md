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

    



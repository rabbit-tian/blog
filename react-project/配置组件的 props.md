### 配置组件的 props
1. React.js 的 props 就可以帮助我们达到这个效果。每个组件都可以接受一个 props 参数，它是一个对象，包含了所有你对这个组件的配置。就拿我们点赞按钮做例子：
    - 从 render 函数可以看出来，组件内部是通过 this.props 的方式获取到组件的参数的，如果 this.props 里面有需要的属性我们就采用相应的属性，没有的话就用默认的属性。
    
    ```
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
        const likedText = this.props.likedText || '取消'
        const unlikedText = this.props.unlikedText || '点赞'
        return (
          <button onClick={this.handleClickOnLikeButton.bind(this)}>
            {this.state.isLiked ? likedText : unlikedText} 👍
          </button>
        )
      }
    }
    ```
2. 那么怎么把 props 传进去呢？在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为 props 对象的键值：
    - 就像你在用普通的 HTML 标签的属性一样，可以把参数放在表示组件的标签上，组件内部就可以通过 this.props 来访问到这些配置参数了。
    
    ```
    class Index extends Component {
      render () {
        return (
          <div>
            <LikeButton likedText='已赞' unlikedText='赞' />
          </div>
        )
      }
    }
    ``` 



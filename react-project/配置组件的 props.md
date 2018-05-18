### 配置组件的 props
1. React.js 的 props 就可以帮助我们达到这个效果。每个组件都可以接受一个 props 参数，它是一个对象，包含了所有你对这个组件的配置。就拿我们点赞按钮做例子：
    
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
2. 



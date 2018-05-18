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

3. 前面的章节我们说过，JSX 的表达式插入可以在标签属性上使用。所以其实可以把任何类型的数据作为组件的参数，包括字符串、数字、对象、数组、甚至是函数等等。例如现在我们把一个对象传给点赞组件作为参数：
    
    ```
    class Index extends Component {
      render () {
        return (
          <div>
            <LikeButton wordings={{likedText: '已赞', unlikedText: '赞'}} />
          </div>
        )
      }
    }
    ```
    
    - 现在我们把 likedText 和 unlikedText 这两个参数封装到一个叫 wordings 的对象参数内，然后传入点赞组件中。JSX 的 {} 内可以嵌入任何表达式，{{}} 就是在 {} 内部用对象字面量返回一个对象而已。这时候，点赞按钮的内部就要用 this.props.wordings 来获取到到参数了：
        
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
            const wordings = this.props.wordings || {
              likedText: '取消',
              unlikedText: '点赞'
            }
            return (
              <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? wordings.likedText : wordings.unlikedText} 👍
              </button>
            )
          }
        }
        ```
    
    - 甚至可以往组件内部传入函数作为参数：
        
        ```
        class Index extends Component {
          render () {
            return (
              <div>
                <LikeButton
                  wordings={{likedText: '已赞', unlikedText: '赞'}}
                  onClick={() => console.log('Click on like button!')}/>
              </div>
            )
          }
        }
        ```
        - 这样可以通过 this.props.onClick 获取到这个传进去的函数，修改 LikeButton 的 handleClickOnLikeButton 方法
        
        ```
        ...
          handleClickOnLikeButton () {
            this.setState({
              isLiked: !this.state.isLiked
            })
            if (this.props.onClick) {
              this.props.onClick()
            }
          }
        ...
        ```
        - 当每次点击按钮的时候，控制台会显示 Click on like button! 。但这个行为不是点赞组件自己实现的，而是我们传进去的。所以，一个组件的行为、显示形态都可以用 props 来控制，就可以达到很好的可配置性



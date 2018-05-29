1. 父级传给自己
    
    ```
    // 父级app组件中定义
    return (
        <div className="container">
          <div className="row">
            <div className="cosl-xs-l cosl-xs-offset11">
              <Home user={msg} max={10} sign={'haha'} />
            </div>
          </div>
        </div>
    )
    
    
    // Home子级  通过props拿数据
    render() {
    
    console.log(this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="cosl-xs-l cosl-xs-offset11">
            <h3>Home</h3>
            <div>your name is {this.props.user.name}</div>
          </div>
        </div>
      </div>
    );
  }
    
    ```




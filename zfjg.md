### 兼容性问题
1. babel es5
2. babel官网  高级代码转成es5

### es6
1. 声明方式  let const
    - let 和 {} 产生块级作用域，只会声明在当前作用域,不会声明在全局作用域
    - 解决作用域污染和局部作用域问题
    - 同一个作用域下同一个只能声明一次
    - 不支持预解析 （变量提升）
    - 如果作用域内定义了这个变量，那么这个作用域内就会绑定这个白能量，不会再继续向上找了
    - 通过const声明的变量不能被修改，如果是复杂类型，地址不能被修改

2. 解构赋值

3. 模板字符串 ``

4. 数组方法
    1. includes
    2. 

5. 箭头函数
    - 箭头函数没有 function 关键字
    - 小括号和大括号有个箭头
    - 如果参数是一个，可以省略小括号 
    - 如果没有return，可以不写大括号
    - 如果直接返回的是对象类型，要用小括号包一下
    - this：
    
6. 剩余运算符： ...args

7. 数组的常用方法
    - map，every,some,filter,forEach  es5
    - find,findIndex  es6
    - reduce


### es6的类
1. 类的继承
    - 公有属性: 
        - 方法一：Child.prototype.__proto__ = Parent.prototype
        - 方法二：
            - Child.prototype = Object.create(Parent.prototype,{constructor: {value:Child}}) 
            
    - 私有属性： Parent.call(this)
    - 静态方法

2. class
    - 类智能new
    - 类可以继承 公有，私有，静态方法
    - 父类的构造函数中返回一个引用类型，子类会把这个引用类型作为子类的this
    
    ```
    class Child extends Parent {{
        constructor() {
            super(); // 相当于call，继承私有属性
        }
    }
    ```

### promise es6
1. promise 是一种异步流程的控制手段
2. promise的链式调用：解决回调地狱
3. promise 可以支持多个并发请求，获取并发请求的数据
4. promise本身不是异步的，里面的then方法是异步的
5. Promise关键字
    - resolve： 成功
    - reject：失败
    - pending：等待
6. 一但promise成功了，就不能失败，相反也是一样的



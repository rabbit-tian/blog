// 模块 
// CMD  就近依赖，AMD  依赖前置 eval 闭包
// commonjs node规范，自带了commonjs规范（默认一个js就是一个模块）
// esmodule es6天生自带

// 带路径的是自己写的模块
// 不带路径的可能是node自带的，也可能是第三方的

// module,exports,require  全局属性，不定义在global上，但是可以直接使用
console.log(11);
console.log(1122);

// 模块引用时，会找到绝对路径
// 模块加载过会有缓存，有就直接拿出来用

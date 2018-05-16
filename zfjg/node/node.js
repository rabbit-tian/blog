// global：全局对象
console.log(global);

// 1. console
// process.stdout
// 标准输出 代号1
console.log('log');
console.log('info');

// 错误输出，不能写到文件里面 , 代号2
console.error("error");
console.warn("warn");

// 打印时间:算服务器请求时间
console.time('a');
for (var i = 0;i<1000;i++) {

}
console.timeEnd('a');


// 断言
console.assert((1+1) == 2,'hello');

// 显示隐藏属性
console.dir(Array.prototype,{showHidden: true});


// 2. progress.argv

// 3. progress.env 创建环境
// mac  export
// 可以根据环境变量打出对应url

// 4. progress.chdir('./4.node)
// 改变当前到 本目录下 (默认是根目录)

// 5. process.nextTick 微任务（比宏任务快）
// 比promise中的then 快


// 6.顺序
// setTimeout 和 setImmediate 顺序不能确定
// nextTick 是插空执行  timer=> check




// progress 进程
    // argv 执行时的参数
    // env 环境变量 ：比如开发环境的错误提示
    // pid 编号
    // chdir   change directory 改变文件夹
    // cwd 读取文件夹中的内容 current working directory
    // stdout 标准输出 stderr 错误输出  stdin 标准输入
// exit 进出进程 kill 杀掉进程
// Buffer 二进制缓存
// setImmediate 宏任务
// setTimeout
// setInterval

// 文件中还增加了几个全局属性


// 调试的方式
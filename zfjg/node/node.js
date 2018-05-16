// global：全局对象
console.log(global);

// console
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

### jQuery版viewer.js图片查看器
1. 下载 `viewer.css`  和 `viewer.js` 和 `jquery.min.js`
    - `git clone https://github.com/fengyuanchen/viewerjs.git.`
    - `http://www.jq22.com/jquery-info122`

2. 引入使用
    - `<link rel="stylesheet" href="css/viewer.min.css">`
    - `<script src="js/jquery.min.js"></script>`
    - `<script src="js/viewer.min.js"></script>`

3. `html`
    - 支持一张或多张图片
    
    ```
    <div id="dowebok">
        <img data-original="img/bg.jpg" src="img/bg.jpg" alt="图片1">
        <h3>你好呀</h3>
        <img data-original="img/bg.jpg" src="img/bg.jpg" alt="图片2">
        <h3>你好呀</h3>
        <img data-original="img/bg.jpg" src="img/bg.jpg" alt="图片2">
    </div>
    ```
4. `js`
    
    ```
    $('#dowebok').viewer();
    ```
5. 具体实例查看



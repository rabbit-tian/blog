### 图表类工具
1. ECharts
    - 在 script 标签引入 echarts.js 文件
    - 为ECharts准备一个具备大小（宽高）的 dom `<div id="main" style="width: 600px;height:400px;"></div>`
    - 基于准备好的dom，初始化echarts实例 `var myChart = echarts.init(document.getElementById('main'));`
    - 指定图表的配置项和数据
    
        ```
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        ```
    - 使用刚指定的配置项和数据显示图表 `myChart.setOption(option)`
    - [查看效果](http://www.echartsjs.com/gallery/editor.html?c=doc-example/getting-started)

### swiper 的使用

### 大屏机适配问题
- 根据设计稿大小设置fontSize

```
(function(){
    var calc = function(){
        var docElement = document.documentElement;
        var clientWidthValue = docElement.clientWidth > 1080 ? 1080 : docElement.clientWidth;
        docElement.style.fontSize = 100*(clientWidthValue/1080) + 'px';
    };
    calc();
    window.addEventListener('resize',calc);
})();
```

### 关于切换手机模式后刷新的问题
- 当屏幕的尺寸发生变化时，触发

```
$(window).resize(function() {
    // real somethings...
})
```

## video 的使用
1. 全屏播放
    
    ```
     webkit-playsinline="true"
     x5-video-player-type="h5"
     x5-video-player-fullscreen="true"
    ```


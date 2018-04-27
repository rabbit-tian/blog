// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
option = {
    title: {
        text: 'line',
    }, 
};               
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
option = {
    title : {
        text: 'line',
        // subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['意向','预购','成交']
    },
    // toolbox: {
        // show : true,
        // feature : {
        //     mark : {show: true},
        //     dataView : {show: true, readOnly: false},
        //     magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        //     restore : {show: true},
        //     saveAsImage : {show: true}
        // }
    // },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            // data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: 0,
            max: 100,
            splitNumber: 4,
        }
    ],
    series : [
        {
            name:'成交',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[0,11,12,14,22,24,29,30,32,50]
        },
        {
            name:'预购',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[0, 50, 50, 75, 73, 75, 74,85,84,100]
        },
        
    ]
};
                

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
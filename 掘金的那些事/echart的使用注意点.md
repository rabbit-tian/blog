### 使用方法
1. 图像展示的容器
    
    ```
     // html
    <div id="data_show" class="data_show"></div>
    
    // css 设置一个大小
  .data_show {
     width: 100%;
     height: 5.3rem;
  }
    
    ```

2. 初始化
    - `var data_show = echarts.init(document.getElementById("data_show"));`
3. 填写参数
    
    ```
    option_count = {
    tooltip: {
      trigger: "axis",
      show: false
    },
    calculable: true,
    grid: {
      // 整个树状图位置
      left: "5%",
      right: "5%",
      top: "10%",
      containLabel: true,
      height: 220
    },
    xAxis: {
      type: "category",
      data: x_data,
      axisLabel: {
        //调整x轴的lable
        textStyle: {
          fontSize: 10,
          color: "#71777D"
        },
        interval: 0
        // rotate: -40
      },
      // 去除x轴上的刻度线
      axisTick: {
        show: false
      },
      // 坐标轴线
      axisLine: {
        lineStyle: {
          color: "#F0F2F3"
        }
      }
    },
    yAxis: [
      {
        type: "value",
        splitLine: {
          //网格线的格式
          show: true,
          lineStyle: {
            color: "#F0F2F3", //网格线颜色
            width: 1, //网格线宽度
            type: "solid" //网格线样式
          }
        },
        axisLabel: {
          //调整x轴的lable
          textStyle: {
            fontSize: 10, // 让字体变大
            color: "#71777D"
          }
        },
        axisLine: {
          show: false
        },
        // 去除x轴上的刻度线
        axisTick: {
          show: false
        }
      }
    ],
    series: {
      name: "平均分",
      type: "bar",
      barWidth: 24,
      itemStyle: {
        normal: {
          color: "#B3DE9A"
        }
      },
      data: y_data
    }
  };
    ```

4. 将参数隐射到容器里
    - `data_show.setOption(option_count);`


### 关于那些参数
1. 



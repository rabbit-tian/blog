1. 一般标题设置
    
    ```
    title: {
        text: "课程学习情况",
        textStyle: {
          fontSize: "14",
          color: "#b8bdf5",
          fontWeight: "normal"
        }
    }
    ```

2. 调节整个图位置
    
    ```
    grid: {
    // 整个树状图位置
    left: "3%",
    right: "8%",
    bottom: "0%",
    containLabel: true
  },
    ```
3. 右侧提示小标题
    
    ```
     legend: {
        x: "50%",
        y: "top",
        itemWidth: 20,
        itemHeight: 16,
        itemGap: 20,
        // data: ["视频广告", "搜索引擎"],
        data: [
          {
            name: "选课人次",
            textStyle: {
              fontSize: 12,
              color: "#7b39f5"
            }
          },
          {
            name: "通过人次",
            textStyle: {
              fontSize: 12,
              color: "#0bbcff"
            }
          }
        ],
        textStyle: {
          color: "#fff"
        }
      },
    ```
4. series： 设置图形的具体样式和数量
    
    ```
    series: [
    {
      name: "报名课程",
      type: "line", // 线图
      smooth: true, // 平滑曲线
      width: 3,
      height: 3,
      color: "#602dd1",
      data: [5424, 5324, 4941, 4923, 4854, 4842, 4753, 4748],
      symbol: "emptyCircle", //设定为实心点
      symbolSize: 8 //设定实心点的大小
    },
    {
      name: "通过课程",
      type: "bar", // 树状图
      color: "#0bbdff",
      symbolSize: 8, //设定实心点的大小
      data: [38735,33382,31424,29345,21785,20435,19242,16249,14237,10765
      ]
    }
  ]
    ```



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

4. 



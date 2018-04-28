let mobileSelect1 = new MobileSelect({
  trigger: "#start-time",
  title: "时间选择",
  wheels: [
    {
      data: [
        { id: "1", value: "1990年" },
        { id: "2", value: "1991年" },
        { id: "3", value: "1992年" },
        { id: "4", value: "1993年" },
        { id: "5", value: "1994年" },
        { id: "6", value: "1995年" },
        { id: "7", value: "1996年" },
        { id: "8", value: "1997年" },
        { id: "9", value: "1998年" },
        { id: "10", value: "1999年" },
        { id: "11", value: "2000年" },
        { id: "12", value: "2001年" },
        { id: "13", value: "2002年" },
        { id: "14", value: "2003年" },
        { id: "15", value: "2004年" },
        { id: "16", value: "2005年" },
        { id: "17", value: "2006年" },
        { id: "18", value: "2007年" },
        { id: "19", value: "2008年" },
        { id: "20", value: "2009年" },
        { id: "21", value: "2010年" },
        { id: "22", value: "2011年" },
        { id: "23", value: "2012年" },
        { id: "24", value: "2013年" },
        { id: "25", value: "2014年" },
        { id: "26", value: "2015年" },
        { id: "27", value: "2016年" },
        { id: "28", value: "2017年" },
        { id: "29", value: "2018年" }
      ]
    },
    {
      data: [
        { id: "1", value: "01月" },
        { id: "2", value: "02月" },
        { id: "3", value: "03月" },
        { id: "4", value: "04月" },
        { id: "5", value: "05月" },
        { id: "6", value: "06月" },
        { id: "7", value: "07月" },
        { id: "8", value: "08月" },
        { id: "9", value: "09月" },
        { id: "10", value: "10月" },
        { id: "11", value: "11月" },
        { id: "12", value: "12月" }
      ]
    }
  ],
  position: [2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
  transitionEnd: function(indexArr, data) {
    //console.log(data);
  },
  callback: function(indexArr, data) {
    // console.log(data);
  }
});
let mobileSelect2 = new MobileSelect({
  trigger: "#end-time",
  title: "时间选择",
  wheels: [
    {
      data: [
        { id: "1", value: "1990年" },
        { id: "2", value: "1991年" },
        { id: "3", value: "1992年" },
        { id: "4", value: "1993年" },
        { id: "5", value: "1994年" },
        { id: "6", value: "1995年" },
        { id: "7", value: "1996年" },
        { id: "8", value: "1997年" },
        { id: "9", value: "1998年" },
        { id: "10", value: "1999年" },
        { id: "11", value: "2000年" },
        { id: "12", value: "2001年" },
        { id: "13", value: "2002年" },
        { id: "14", value: "2003年" },
        { id: "15", value: "2004年" },
        { id: "16", value: "2005年" },
        { id: "17", value: "2006年" },
        { id: "18", value: "2007年" },
        { id: "19", value: "2008年" },
        { id: "20", value: "2009年" },
        { id: "21", value: "2010年" },
        { id: "22", value: "2011年" },
        { id: "23", value: "2012年" },
        { id: "24", value: "2013年" },
        { id: "25", value: "2014年" },
        { id: "26", value: "2015年" },
        { id: "27", value: "2016年" },
        { id: "28", value: "2017年" },
        { id: "29", value: "2018年" }
      ]
    },
    {
      data: [
        { id: "1", value: "01月" },
        { id: "2", value: "02月" },
        { id: "3", value: "03月" },
        { id: "4", value: "04月" },
        { id: "5", value: "05月" },
        { id: "6", value: "06月" },
        { id: "7", value: "07月" },
        { id: "8", value: "08月" },
        { id: "9", value: "09月" },
        { id: "10", value: "10月" },
        { id: "11", value: "11月" },
        { id: "12", value: "12月" }
      ]
    }
  ],
  position: [2], //初始化定位 打开时默认选中的哪个 如果不填默认为0
  transitionEnd: function(indexArr, data) {
    //console.log(data);
  },
  callback: function(indexArr, data) {
    // console.log(data);
  }
});

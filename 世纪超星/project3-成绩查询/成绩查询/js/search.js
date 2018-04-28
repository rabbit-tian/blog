$(function() {
  // 填写选择内容
  let textArr = {
    grade: ["初一", "初二","初三","高一","高二","高三",],
    term: [
      "2014-2015下半年学期",
      "2014-2015下半年学期",
      "2015-2016下半年学期",
      "2015-2016下半年学期"
    ],
    mark: ["不及格","及格", "良好", "优秀"],
    project: ["语文", "数学", "英语"]
  };
  let firstLoading = false;

  // 点击选项-事件代理
  $(".nav").click("li", function(e) {
    let $target = $(e.target);
    if ($target[0].nodeName == 'IMG') {
      $target = $target.parents('li')
    }
    
    let data = $target.attr("atr");
    let arr = textArr[data] || [];

    // 如果点击元素的isClick属性是1，则恢复原状
    if ($target.attr("isClick") == "1") {
      console.log("恢复原状");
      old($target);
      $target.find("img").css("transform", "rotate(0)");
      return;
    }
    // 动态渲染选项内容
    let html = "";
    for (let i = 0; i < arr.length; i++) {
      html += "<li>" + arr[i] + "</li>";
    }
    $(".show-box").html(html);
    $(".show-box").children('li:first-child').addClass('active');
    $(".show-box").css({ top: -$(".show-box").height() + "px" });

    // 清除其他样式样式
    old($target.siblings("li"));
    // 添加当前样式
    clicked($target);

    $target.attr("isClick", 1);
  });

  // 点击选项选择具体内容
  $(".show-box").on("click", "li", function(e) {
    console.log("选中项：" + $(e.target).text());

    // 选择后恢复原状
    let $lis = $(".nav li");
    old($lis);
  });

  // nav点击后恢复的样式
  function old(target) {
    target.css({ color: "#333" });
    target.find("img").attr("src", "images/bot.png");
    target.attr("isclick", 0);
    target.find("img").css("transform", "rotate(0)");
    $(".show-box").css({
      top: -100 + "rem",
      transition: "transform .3s ease-out",
      transform: "translate(0, 0)"
    });
    arr = null;
    $(".mark").hide();
    // target.attr("isClick", 0);
  }
  //nav点击后的选中的样式
  function clicked(target) {
    target.css({ color: "#4e9fee" });
    target.find("img").attr("src", "images/top.png");
    // target.find("img").css("transform", "rotate(-180deg)");
    $(".show-box").css({
      top: 0 + "rem",
      transition: "transform .3s ease-out",
      transform: "translate(0, 0.91rem)"
    });
    $('.mark').show();
  }
});

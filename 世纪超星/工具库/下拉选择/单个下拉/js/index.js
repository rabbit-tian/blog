$(function() {
  // 点击遮罩层取消样式
  $(".mark").on("click", function() {
    // 清除成绩排行下来
    $(".head_nav li").each(function() {
      if ($(this).attr("isClick") == "1") {
        old($(this));
      }
    });
    // 允许滚动
    goScroll();
  });

  /**********点击显示选项框*******/
  // 填写选择内容
  // var textArr = {
  //   all: [
  //     "高一 1班",
  //     "高一 2班",
  //     "高一 3班",
  //     "高二 1班",
  //     "高二 2班",
  //     "高二 3班",
  //     "高三 1班",
  //     "高三 2班",
  //     "高三 3班"
  //   ],
  //   style: [
  //     "语文",
  //     "数学",
  //     "英语",
  //     "历史",
  //     "政治",
  //     "物理",
  //     "生物",
  //     "化学",
  //     "体育"
  //   ]
  // };

  var num1 = 0;
  // var num2 = 0;

  // 点击选项 全部或类型
  $(".head_nav li").click(function(e) {
    // 禁止鼠标滚动
    stopScroll();
    e.preventDefault();

    // 获取自定义属性，判断点击的目标，然后赋值内容渲染
    // var data = $(this).attr("atr");
    var arr = [
      "高一 1班",
      "高一 2班",
      "高一 3班",
      "高二 1班",
      "高二 2班",
      "高二 3班",
      "高三 1班",
      "高三 2班",
      "高三 3班"
    ];

    // 动态渲染选项内容
    var html = "";
    for (var i = 0; i < arr.length; i++) {
      html +=
        "<li targetEl=" +
        $(this).attr("atr") +
        ">" +
        arr[i] +
        '<img class="selected" src="img/selected.png" alt=""></li>';
    }

    $(".show-box").html(html);

    // 循环点击nav的处理，如果点击元素的isClick属性是1，则恢复原状
    if ($(this).attr("isClick") == "1") {
      old($(".head_nav li"));

      $(this)
        .find("span")
        .css({ color: "#2b333b" });
      $(this)
        .find(".trag")
        .css("transform", "rotate(0)");
      return;
    }
    $(this).attr("isClick", 1);

    // 添加列表框默认选中的样式
    // if ($(this).attr("atr") == "all") {
      $(".show-box")
        .children("li")
        .eq(num1)
        .addClass("active")
        .find(".selected")
        .show();

    // } else {
    //   $(".show-box")
    //     .children("li")
    //     .eq(num2)
    //     .addClass("active")
    //     .find(".selected")
    //     .show();
    // }

    // 添加当前样式
    clicked($(this));
  });

  // 点击选项选择具体内容
  $(".show-box").on("click", "li", function(e) {
    console.log("选中项：" + $(this).text());

    // 改变列表选中项
    if ($(this).attr("targetEl") == "all") {
      $("#al").text($(this).text());
      num1 = $(this).index();
    } else {
      $("#sty").text($(this).text());
      num2 = $(this).index();
    }

    // 改变选中的列表
    $(this)
      .addClass("active")
      .find(".selected")
      .show();
    $(this)
      .siblings("li")
      .removeClass("active")
      .find(".selected")
      .hide();

    // 选择后恢复原状
    setTimeout(() => {
      old($(".head_nav li"));
      // 允许鼠标滚动
      goScroll();
    }, 300);
  });

  // nav点击后恢复的样式
  function old(target) {
    // 恢复nav的颜色
    target.find("span").css({ color: "#2b333b" });

    // 三角 恢复样式
    target.attr("isclick", 0);
    target.find(".trag").css({
      transform: "rotate(0)",
      borderTop: "0.1rem solid #000"
    });

    // 弹出窗影藏
    $(".show-box").css({
    //   top: -100 + "rem",
      transform: "translateY(-6rem)",
      transition: "transform .6s ease-out",
    //   transform: "translate(0, 0)"
    });
    arr = null;

    $(".mark").hide();
  }

  //nav点击后的选中的样式
  function clicked(target) {
    // 添加nav的颜色
    target.find("span").css({ color: "rgb(17, 106, 228)" });

    // 三角运动变样式
    target.find(".trag").css({
      transform: "rotate(-180deg)",
      borderTop: "0.1rem solid rgb(17, 106, 228)"
    });

    // 弹出窗显示
    $(".show-box").css({
    //   top: 0 + "rem",
    //   transform: "translateY(-100rem)",
      transition: "transform .6s ease-out",
      transform: "translate(0, 7.86rem)"
    });

    setTimeout(() => {
        $(".mark").show();
    },200);
  }

  // 禁止鼠标滚动
  function stopScroll() {
    $("document").on("touchmove", "no", function(e) {
      e.preventDefault();
    });

    $("body").css({ overflow: "hidden" });
  }

  // 允许滚动
  function goScroll() {
    $("document").off("touchmove", "no", function(e) {
      e.preventDefault();
    });

    $("body").css({ overflow: "auto" });
  }
});

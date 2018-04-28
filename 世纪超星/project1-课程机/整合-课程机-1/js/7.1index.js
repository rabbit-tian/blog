$(function() {
  videojs("my-player").on("playing", function() {
    $(".mask").hide();
    $(".mask-layer").hide();
  });

  $(".right").on("click", function(e) {
    e.stopPropagation();
    $(".mask-layer").removeClass("active");
    $(".mask-layer").show();
    stopScroll();
  });
  $(".cancel").on("click", function(e) {
    e.stopPropagation();
    $(".mask-layer").hide();
    goScroll();
  });

  // 禁止鼠标滚动
  function stopScroll() {
    $(document).on("touchmove", "no", function(e) {
        e.preventDefault();
    });
    $("body").css({ overflow: "hidden" });
    $("html").css({ overflow: "hidden" });
  }
  // 允许滚动
  function goScroll() {
    $(document).off("touchmove", "no", function(e) {
      e.preventDefault();
      console.log(11);
    });
    $("body").css({ overflow: "auto" });
    $("html").css({
      overflow: "auto",
      // 如果你对某个div或模块使用了overflow: scroll属性，在iOS系统的手机上浏览时，则会出现明显的卡顿现象。但是在android系统的手机上则不会出现该问题。据说是因为这行代码启用了硬件加速特性，所以滑动很流畅。但是这个属性也会相对耗费更多内存。在流畅的滑动效果和耗费内存之间
      "-webkit-overflow-scrolling": "touch"
    });
  }
});

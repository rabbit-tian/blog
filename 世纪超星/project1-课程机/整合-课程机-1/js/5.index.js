
$(function () {
    let curIndx = 1; // 默认显示的面板 下标值
    let indx = 1; // 当前按钮的下标
    let colorArr = ["#7cd444", "#fc8587", "#7385eb", "#4e9fee"];
    // 动态计算高度
    let height = $(html).height() - $('header').height();
    $('main').height(height);

    // 默认显示第一个
    let index = 0;
    $(".firstEl").css({
      color: colorArr[index],
      backgroundColor: "#fff",
      borderBottom: "none",
    });

    // 点击大标题切换
    $('.tab').find('li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        index = $(this).index();
        $(this)
          .css({
            color: colorArr[index],
            backgroundColor: "#fff",
            borderBottom: "none"
          })
          .siblings()
          .css({ color: "#999", backgroundColor: "#f4f4f4" });
    })
    // 点击navbar标签进行 面板切换
    $('.navbar').find('li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        indx = $(this).index();
        let rang = $(document).width()/4
        $('.triangle-sign').animate({
            left: rang*indx
        }, 300)
    })
    
});


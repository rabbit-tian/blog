
$(function () {
let curIndx = 1 // 默认显示的面板 下标值
let indx = 1 // 当前按钮的下标

// 点击navbar标签进行 面板切换
$('.navbar').find('li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    indx = $(this).index();
    // 切换面板
    tabPanel(indx, $('.art'));
})
function tabPanel(indx, $tabContents) {
    // 三角图标滑动
    let rang = $(document).width()/4
    $('.triangle-sign').animate({
        left: rang*indx
    }, 300)
    // 改变面板初始值
    curIndx = indx;
    // 隐藏和显示对应面板
    $tabContents.each(function(index, item) {
        $(item).hide();
    })
    $tabContents.eq(indx).fadeIn();
}
});

// swiper
var mySwiper = new Swiper('.swiper-container', {
    pagination : '.pagination',
    autoplay: 2000,//可选选项，自动滑动
    loop: true,
})


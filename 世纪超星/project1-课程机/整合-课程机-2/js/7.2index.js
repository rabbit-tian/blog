$(function () {
    videojs('my-player').on('playing',function () {
        $('.mask').hide();
    })
    // 动态计算高度
    let height = $(html).height() - $('.video-ct').height();
    $('.course').height(height);
    $('.describe').height(height);
})

$(document).ready(function () {
    //导航
    var nav = $('.swiper-nav').swiper({
        slidesPerView: 'auto',
        freeMode: true,
        noSwiping: true,
        freeModeFluid: true,
        calculateHeight: true,
        visibilityFullFit: true,
        onSlideClick: function (nav) {
            tabsSwiper.swipeTo(nav.clickedSlideIndex);
        }
    });

    //获取初始时1个框的宽度
    var middle_div = "";
    var line_outer_div = "";
    middle_div = $(".swiper-nav .swiper-slide").width();
    line_outer_div = $(".swiper-nav").width();
    $(".swiper-nav .swiper-slide").click(function () {
        //获取整条宽度
        var tiao_lang = $(".swiper-nav").width();
        var _this = $(this);
        kuandu_jisuan(_this);
    });

    function kuandu_jisuan(_this) {
        var curIndex = _this.index();
        //父级距swiper-container左侧的距离
        list_parent = _this.parent().offset().left;
        if (curIndex >= 1 || list_parent < -2) {
            //当前点击距左侧距离
            var this_div_left = _this.offset().left;
            /*
             middle_div：单个滑块的宽
             this_div_left：
             */
            var mover_width = middle_div - this_div_left + list_parent;
            if (-mover_width > _this.parent().width() - line_outer_div) {
                mover_width = -_this.parent().width() + line_outer_div;
            }
            if (mover_width >= 0) {
                mover_width = 0;
            }
            _this.parent().get(0).style.transition = "0.3s";
            _this.parent().get(0).style.WebkitTransition = "0.3s";
            _this.parent().get(0).style.transform = "translate3d(" + (mover_width) + "px, 0px, 0px)";
            _this.parent().get(0).style.WebkitTransform = "translate3d(" + (mover_width) + "px, 0px, 0px)";
        }
        else {
            return false;
        }
    }

    //推荐专题

    var tabsSwiper = new Swiper('#tabs-container', {
        speed: 500,
        onSlideChangeStart: function () {
            $(".swiper-nav .active").removeClass('active');
            $(".swiper-nav .swiper-slide").eq(tabsSwiper.activeIndex).addClass('active');
            activeHeight();
            //获取整条宽度
            var tiao_lang = $(".swiper-nav").width();
            //console.log(middle_div)
            var _this = $(".swiper-nav .swiper-slide").eq(tabsSwiper.activeIndex);
            kuandu_jisuan(_this);

        }
    });

    //初始化高度
    function fixPagesHeight() {
        var H = $(".wrapUl").eq(0).outerHeight();
        $("#tabs-container .swiper-wrapper").css('height', H + 'px');
        $("#tabs-container .swiper-slide").css('height', H + 'px');
    }

    function activeHeight() {
        var H = $(".wrapUl").eq(tabsSwiper.activeIndex).outerHeight();
        $("#tabs-container .swiper-wrapper").css('height', H + 'px');
        $("#tabs-container .swiper-slide").css('height', H + 'px');
    }

    $(window).on('resize', function () {
        activeHeight();
        fixPagesHeight()
    });
    fixPagesHeight();
})
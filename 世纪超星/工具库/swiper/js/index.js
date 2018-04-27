var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
	loop: true, // 循环
	pagination: { // 分页器
		el: '.swiper-pagination',
	},
	navigation: { // 前后按钮
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		color: '#000',
	},
	keyboard : true, // 键盘
});
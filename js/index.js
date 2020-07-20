$("#Vice,#line,li a").click(function() {
	$("html, body").animate({
		scrollTop: $($(this).attr("href")).offset().bottom - 20 + "px"
	}, 1000);
	$("#Rotation-1,#Rotation-2,#Rotation-3,#Rotation-4").each(function() {
		$this = $(this);
		if ($this[0].href == String(window.location)) {
			$("#Rotation-1,#Rotation-2,#Rotation-3,#Rotation-4,#Rotation-5").removeClass("on");
			$this.addClass("on");
		}
	});
	return false; //不要这句会有点卡顿
});


// $(function() {
// 	$(".first-line-right ul li").click(function() {
// 		$("right-li").eq(x).click(function(){
// 			var=x;
// 		$("div").hide().eq(x).show();
// });
// $(".right-li").eq(0).click(function() {
// 	$("div").hide().eq(0).show();
// }); /*第一个*/
// $(".right-li").eq(1).click(function() {
// 	$("div").hide().eq(1).show();
// }); /*第二个bai*/
// $(".right-li").eq(2).click(function() {
// 			$("div").hide().eq(2).show();

			$('right-li li a').bind({
				mouseover: function() {
					var item_width = $(this).outerWidth();
					var item_position_left = $(this).position().left;

					$nav_line.stop().animate({
						'width': item_width,
						'margin-left': item_position_left
					}, 800, 'easeOutBounce');
				},
				mouseout: function() {
					$nav_line.stop().animate({
						'width': item_width,
						'margin-left': item_position_left
					}, 800, 'easeOutBounce');
				}
			});

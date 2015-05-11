$(document).ready(function() {

	$(".phone .tab_item").not(":first").hide();
	$(".phone .wrapper .tab").click(function() {
		$(".phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".offers-cta .tab_item").not(":first").hide();
	$(".offers-cta .wrapper .tab").click(function() {
		$(".offers-cta .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".offers-cta .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(function(){
		$(".second form .input-group input").focusout(function(){
			var text_val = $(this).val();
			if(text_val === "") {
				$(this).removeClass("has-value is-active");
			} else {
				$(this).addClass("has-value is-active");
			}
		});

		$(".second form .input-group input").focus(function(){
			$(this).addClass("is-active");
		});
		$(".second form .input-group input").focusout(function(){
			$(this).removeClass("is-active");
			});
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});
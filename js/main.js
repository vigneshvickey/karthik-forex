$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});
$(document).ready(function() {
$("#search").click(function(){
	$("#package-holiday").hide();
});
});
// $(function () {
//   $(document).scroll(function () {
// 	  var $nav = $(".navbar-fixed-top");
// 	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
// 	});
// });
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $(".navbar-trans ").addClass("darkHeader");
    }
    else {
        $(".navbar-trans ").removeClass("darkHeader");
    }
});
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
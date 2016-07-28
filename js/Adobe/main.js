$(document).scroll(function() {
//detect when user scroll to top and set position to relative else sets position to fixed
$("#scrolling_Header").css({
"top": "0",
"position": $(this).scrollTop() > 140 ? "fixed" : "relative"
});
});

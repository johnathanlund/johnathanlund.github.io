angular.module('appPortfolio')
.directive('navBar', function() {
  return {
    restrict: "E",
    templateUrl: './js/directives/navbar.html',
    controller: function () {
      // var lastScrollTop = 0;
      // $(document).on('scroll', function () {
      //     var st = $(this).scrollTop();
      //       if (st > lastScrollTop) {
      //         if($(window).width() >= 1024) {
      //         $('.navbar_container').slideUp(500);
      //     }} else {
      //         $('.navbar_container').slideDown(500);
      //     }
      //     lastScrollTop = st;
      // });
      $("document").ready (function() {
  $(".toggle").click(function() {
    $( ".menu" ).stop().slideToggle( "slow" );
  });

});
    }
  };
});

angular.module('portfolioApp')
.directive('navcircleMenu', function() {
  return {
      restrict: "E",
      templateUrl: 'menu.html'
      // controller: 'menuCtrl.js',
  };
})

.directive('footer', function () {
  return {
    restrict: "AE",
    template: "<div class='footerInfo'><strong>Johnathan Lund</strong> is one of the radest dudes to ever write this<strong>!</strong></div>"
  };
});

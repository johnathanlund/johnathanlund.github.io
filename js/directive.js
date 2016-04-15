angular.module('portfolioApp')
.directive('navcircleMenu', function() {
  return {
      restrict: "E",
      templateUrl: 'menu.html'
      // controller: 'menuCtrl.js',
  };
});

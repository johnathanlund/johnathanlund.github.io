angular.module('appPortfolio').controller('homeCtrl', function ($scope) {

  $scope.hoverIn = function() {
    this.hoverInfo = true;
  };

  $scope.hoverOut = function() {
    this.hoverInfo = false;
  };

});

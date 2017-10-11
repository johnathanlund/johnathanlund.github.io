angular.module('appPortfolio').controller('homeCtrl', function ($scope) {

  $scope.hoverIn = function() {
    this.hoverInfo = true;
  };

  $scope.hoverOut = function() {
    this.hoverInfo = false;
  };

  $scope.hoverInHandyman = function() {
    this.hoverInfoHandyman = true;
  };

  $scope.hoverOutHandyman = function() {
    this.hoverInfoHandyman = false;
  };

  $scope.hoverInSilverGold = function() {
    this.hoverInfoSilverGold = true;
  };

  $scope.hoverOutSilverGold = function() {
    this.hoverInfoSilverGold = false;
  };

  $scope.hoverInDevHousing = function() {
    this.hoverInfoDevHousing = true;
  };

  $scope.hoverOutDevHousing = function() {
    this.hoverInfoDevHousing = false;
  };

  $scope.hoverInPhotoshop = function() {
    this.hoverInfoPhotoshop = true;
  };

  $scope.hoverOutPhotoshop = function() {
    this.hoverInfoPhotoshop = false;
  };

});

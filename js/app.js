angular.module('appPortfolio', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: './js/Home/homeTmpl.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: "/about",
        templateUrl: "./js/About/aboutTmpl.html",
        controller: 'aboutCtrl'
      });

  $urlRouterProvider.otherwise('/home');
});

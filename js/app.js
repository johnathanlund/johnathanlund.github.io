angular.module('appPortfolio', ['ui.router', 'smoothScroll']).config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: './js/Home/homeTmpl.html',
        controller: 'homeCtrl'
      })
      .state('resume', {
        url: "/resume",
        templateUrl: "./js/Resume/resumeTmpl.html",
        controller: 'resumeCtrl'
      });

  $urlRouterProvider.otherwise('/home');
});

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
      })
      .state('adobeClone', {
        url: "/adobeClone",
        templateUrl: "./js/Adobe_Photoshop_Copy/index.html",
        controller: 'main.js'
      });

  $urlRouterProvider.otherwise('/home');
});

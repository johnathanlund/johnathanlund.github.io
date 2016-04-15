angular.module('portfolioApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {



    $stateProvider
        .state('home', {
          url: "/homePage",
          templateUrl:"./js/Home/homeTmpl.html",
        })
        .state('work', {
          url: "/workPage",
          templateUrl: "./js/work/workTmpl.html"
        })
        .state('inspiration', {
          url: "/inspiration",
          templateUrl: "./js/inspiration/inspirTmpl.html"
        })
        .state('knowledge', {
          url: "/knowledge",
          templateUrl: "./js/knowledge/knowTmpl.html"
        })
        .state('spartaAttack', {
          url: "/spartaPage",
          templateUrl: "./js/home/spartaTmpl.html"
        });
        $urlRouterProvider.otherwise('/homePage');
})

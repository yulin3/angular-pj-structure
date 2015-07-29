
define(["angular", "angular-route" ,"home/namespace"],function(){
  'use strict';
  return angular.module("app",[ 'ngRoute', 'app.home'], function() {

  })
    .config(['$routeProvider',function ($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'modules/home/templates/home.html',
          controller: 'homeCtrl'
        })
        .when('/list', {
          templateUrl: 'modules/home/templates/list.html',
          controller: 'listCtrl'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }]);
})

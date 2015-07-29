define([
  'ionic',
  'home/namespace',
  'list/namespace'
], function () {
  'use strict';
  return angular.module('app', ['ionic',  'app.home', 'app.list'], function ($compileProvider, $sceProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|cdvfile|data):/);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|cdvfile|data):/);
    $sceProvider.enabled(false);
  })
    .run(['$ionicPlatform', function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
      });
    }])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {//配置路由
      $stateProvider
        .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "../modules/tabs.html"
        })
        .state('tab.home', {
          url: '/home',
          views: {
            'tab-home': {
              templateUrl: '../modules/home/templates/home.html',
              controller: 'homeCtrl'
            }
          }
        })
        .state('tab.list', {
          url: '/list',
          views: {
            'tab-list': {
              templateUrl: '../modules/list/templates/list.html',
              controller: 'listCtrl'
            }
          }
        });;
      $urlRouterProvider.otherwise('/tab/home');
    }]);
});

'use strict';
define(["../module"],function(module){
  module.controller("homeCtrl", ["$scope", function ($scope) {
    $scope.test = function () {
      alert("just test");
    }
  }])
})

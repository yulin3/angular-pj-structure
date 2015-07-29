'use strict';
define(["../module"],function(module){
  module.controller("listCtrl", ["$scope", function ($scope) {
    $scope.test = function () {
      alert("just test!");
    }
  }])
})

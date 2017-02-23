(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('marul', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'marulFilter'];
function MsgController ($scope, marulFilter) {
  $scope.stateOfBeing = "Muti";

  $scope.sayMessage = function() {
    var msg = "Muti patates kızartmasını sever";
    return msg;
  }

  $scope.sayLovesMessage = function () {
    var mesaj = "Muti patates kızartmasını sever";
    mesaj = marulFilter(mesaj);
    return mesaj;
  };

  $scope.feedMuti = function () {
    $scope.stateOfBeing = "Yo yoy yoy"
  };
}

function LovesFilter() {
  return function(input){
    input = input || "";
    input = input.replace("Muti", "Marul");
    return input;
  }
}

function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  }
}

})();

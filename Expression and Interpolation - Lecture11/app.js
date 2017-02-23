(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController ($scope) {
  $scope.name = "Muti";
  $scope.stateOfBeing = "foto1";

  $scope.sayMessage = function() {
    return "Muti likes potatoes";
  };

  $scope.feedMuti = function() {
    $scope.stateOfBeing = "foto2";
  }
}

})();

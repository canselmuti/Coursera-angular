(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = "Muti";

  $scope.showNumberOfWatchers = function () {
    console.log("# of Wacthers: ", $scope.$$watchersCount);
  };

  $scope.counterOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.counter++;
  };

  $scope.$watch(function () {
    console.log("Digest Loop Fired!!");
  })

  // $scope.$watch('onceCounter', function(newValue, oldValue) {
  //   console.log("onceCounter old Value: ", oldValue);
  //   console.log("onceCounter new Value: ", newValue);
  // });
  //
  // $scope.$watch('counter', function(newValue, oldValue) {
  //   console.log("counter old Value: ", oldValue);
  //   console.log("counter new Value: ", newValue);
  // });
}

})();

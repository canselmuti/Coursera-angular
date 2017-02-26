(function () {
'use strict';

angular.module('BindingApp', [])
.controller('BindingController', BindingController);

BindingController.$inject = ['$scope'];
function BindingController ($scope) {
  $scope.firstName = "Cansel";
  //$scope.lastName = "";

  $scope.showNumberOfWatchers = function() {
    console.log('# of Watchers: ', $scope.$$watchersCount);
  }

  $scope.setFullName = function () {
    $scope.fullName = $scope.firstName + " " + "Muti";
  };

  $scope.logFirstName = function () {
    console.log('First Name is: ', $scope.firstName);
  };

  $scope.logFullName = function () {
    console.log('Full Name is: ', $scope.fullName);
  };
}

})();

(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', ['$scope', '$filter', '$injector', DIController]);

function DIController ($scope,
                        $filter,
                      $injector) {
  $scope.name = "Muti";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name)
  };

  console.log($injector.annotate(DIController));//fonksiyonun argümanlarının bir dizisini döndürür
}

function AnnotateMe(name, job, blah) {
  return "Blah";
}

console.log(AnnotateMe()); // Fonksiyonu çalıştırıp dönen değeri ekrana basar(console a)
console.log(AnnotateMe);
console.log(AnnotateMe.toString()); // Üstteki satırla ile aynı şeyi yapar
console.log(DIController.toString());

})();

(function () {
'use strict';

var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol",
  "Pepto Bismol (Chocolate flavor)", "Pattis"
];

var shoppingList2 = [
  {
    name: "Süt",
    quantity: "2"
  },
  {
    name: "Pattis",
    quantity: "5"
  },
  {
    name: "Yogurt",
    quantity: "1"
  }
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList1   = shoppingList1;
  $scope.shoppingList2 = shoppingList2;

  $scope.addToList = function() {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList2.push(newItem);
  };
}

})();

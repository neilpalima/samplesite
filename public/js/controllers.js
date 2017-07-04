'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $scope.showOverview = true;
  $scope.showOrders = $scope.showUsers = $scope.showProducts = false;

  this.getProducts = () => {
    $http({method: 'GET', url: '/products/getAll'}).
      success(function(data, status, headers, config) {
        $scope.products = data.products;
      }).
      error(function(data, status, headers, config) {
        $scope.error = 'Error!'
      });
  }

  this.getUsers = () => {
    console.log("natawag namann")
    $http({method: 'GET', url: '/users/getAll'}).
      success(function(data, status, headers, config) {
        $scope.users = data.users;
      }).
      error(function(data, status, headers, config) {
        $scope.error = 'Error!'
      });
  }

  this.showProducts = () => {
    $scope.showProducts = true;
    $scope.showOrders = $scope.showOverview = $scope.showUsers = false;
  }

  this.showUsers = () => {
    $scope.showUsers = true;
    $scope.showOrders = $scope.showOverview = $scope.showProducts = false;
  }

  this.showOrders = () => {
    $scope.showOrders = true;
    $scope.showUsers = $scope.showOverview = $scope.showProducts = false;
  }

  this.showOverview = () => {
    $scope.showOverview = true;
    $scope.showUsers = $scope.showOrders = $scope.showProducts = false;
  }
}

function MyCtrl1() {

}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


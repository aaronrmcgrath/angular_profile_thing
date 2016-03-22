var myApp = angular.module('myApp', []);

myApp.controller('IntroController', ['$scope', '$http', function($scope, $http){
    // $scope.employee = {};

    $scope.kappaArray = [];



    $scope.getKappa = function() {
      $http.get('/kappa').then(function(response){
        var results = response.data;
        console.log('*** RESULTS: ', results);
        $scope.kappaArray = results;
      });
    }

    $scope.getKappa();

}]);








// END _-_-_-_-_-_|>




//
// $scope.meow = function(){
//     console.log('Meow');

// };

// $scope.saveEmployee = function(value){
//     console.log(value);
    // $scope.employeeArray.push(value);
//     $scope.employee = {};
//     console.log($scope.employeeArray);
// };

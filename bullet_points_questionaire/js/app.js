var app = angular.module('myApp', []);
app.controller('questionaireCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('data.json').success(function (data) {
        $scope.qList = data;
    });
}]);

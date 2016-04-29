var foodentControllers = angular.module('foodentControllers', []);

foodentControllers.controller('SettingsController', ['$scope', '$window', function ($scope, $window) {
    $scope.url = $window.sessionStorage.baseurl;

    $scope.setUrl = function () {
        $window.sessionStorage.baseurl = $scope.url;
        $scope.displayText = "URL set";

    };
}]);

foodentControllers.controller('LoginController', ['$scope', 'AuthService', function ($scope, AuthService) {
    $scope.user = {email: '', password : ''};
    $scope.login = function(){
        //AuthService.
        AuthService.login($scope.user).then(function(response){
            console.log(response.data);
        },function(response){
            console.log(response.data);
        });
    }
}]);


foodentControllers.controller('SignupController', ['$scope', 'AuthService', function ($scope, AuthService) {
    $scope.user = {email: '', password : ''};

    $scope.signup = function(){
        AuthService.signup($scope.user).then(function(response){
            console.log(response.data);
        },function(response){
            console.log(response.data);
        });
    };
}]);



foodentControllers.controller('UserprofileController', ['$scope', function ($scope) {
    $scope.user = {}
}]);




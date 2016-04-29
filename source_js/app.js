var app = angular.module('foodent_client', ['ngRoute', 'foodentControllers', 'foodentServices']);

app.constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated'
}).constant('API_ENDPOINT', {
    url: 'http://127.0.0.1:4000/api'
    //  For a simulator use: url: 'http://127.0.0.1:8080/api'
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'SettingsController'
    }).when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    }).when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupController'
    }).when('/userprofile', {
        templateUrl: 'partials/userprofile.html',
        controller: 'UserprofileController'
    }).otherwise({
        redirectTo: '/settings'
    });
}]);




var foodentServices = angular.module('foodentServices', []);

foodentServices.factory('AuthService', ['$http', '$q', 'API_ENDPOINT',function ($http, $q, API_ENDPOINT) {
    var ACCESS_TOKEN = 'access_token';
    var isAuthenticated = false;
    var authToken;

    function useCredentials(token) {
        isAuthenticated = true;
        authToken = token;
        // Set the token as header for your requests!
        $http.defaults.headers.common.Authorization = authToken;
    }

    function loadUserCredentials() {
        var token = window.localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            useCredentials(token);
        }
    }

    function storeUserCredentials(token) {
        window.localStorage.setItem(ACCESS_TOKEN, token);
        useCredentials(token);
    }

    var signup = function (user) {
        var config = {
            method: 'POST',
            url: API_ENDPOINT.url + '/signup',
            data: user
        };
        return $q(function (resolve, reject) {
            $http(config).then(function (response) {
                resolve(response);
            }, function (response) {
                reject(response);
            });
        });
    };

    var login = function (user) {
        var config = {
            method: 'POST',
            url: API_ENDPOINT.url + '/authenticate',
            data: user
        };
        return $q(function (resolve, reject) {
            $http(config).then(function (response) {
                storeUserCredentials(result.data.data);
                resolve(response);
            }, function (response) {
                reject(response);
            });
        });
    };

    function destroyUserCredentials() {
        authToken = undefined;
        isAuthenticated = false;
        $http.defaults.headers.common.Authorization = undefined;
        window.localStorage.removeItem(ACCESS_TOKEN);
    }

    var logout = function() {
        destroyUserCredentials();
    };

    loadUserCredentials();

    return {
        login: login,
        signup: signup,
        logout: logout,
        isAuthenticated: function() {
            return isAuthenticated;
        }
    }

}]);

/**
 * Created by dcreey on 12/16/2015.
 */
var photon = angular.module("photon", ['ui.router'])

.run(
    ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.baseUrl = "http://127.0.0.1:3001";
    }]
);
photon.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'html/landingPage.html'
        })
        .state('oauth', {
            url: '/oauth',
            templateUrl: 'html/oauth.html'
        })
        .state('content', {
            url: '/content',
            templateUrl: 'html/contentPage.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'html/about.html'
        });

});

photon.directive('header', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "/html/header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    }
});

photon.directive('footer', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "/html/footer.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    }
});

photon.controller("photonCtrl", function($http){
    var app = this;
})

photon.controller("contentCtrl", function($scope,$http){
    var content = this;

    function loadUsers() {
        $http.get("http://localhost:3001/api/user").success(function (users) {
            content.users = users;
        });
    }
    content.saveUser = function(newUser) {
        $http.post("http://localhost:3001/api/user/add", {name: newUser}).success(function () {
            console.log("success");
            loadUsers();
        })
    }

    loadUsers();
})
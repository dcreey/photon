/**
 * Created by dcreey on 12/16/2015.
 */
var photon = angular.module("photon", ['ui.router'])

.run(
    ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]
)
.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/",
                template: "html/landingPage.html",
                controller:"controllers/landingPage.js"
            });
    }
]);

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

    function loadUsers() {
        $http.get("http://localhost:3001/api/user").success(function (users) {
            app.users = users;
        });
    }
    app.saveUser = function(newUser) {
        $http.post("http://localhost:3001/api/user/add", {name: newUser}).success(function () {
            console.log("success");
            loadUsers();
        })
    }

    loadUsers();
})
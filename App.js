angular.module('App', ["App.controllers", "App.services", "App.directives", "App.filters",  "ngRoute", "ngResource", 'ui.bootstrap', 'ngCsv', 'gridshore.c3js.chart'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: 'view/home.html',
                controller: 'HomeController'
            })
            .otherwise({ redirectTo: 'home' });

    });

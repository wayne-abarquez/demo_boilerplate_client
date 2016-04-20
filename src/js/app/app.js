(function () {
    'use strict';

    angular
        .module('demoApp', ['ui.router', 'LocalStorageModule', 'ngMaterial', 'ngAnimate', 'oitozero.ngSweetAlert', 'vAccordion'])

        .constant('APP_NAME', 'Navagis Demo')
        .constant('BASE_URL', window.location.origin)
        .constant('LAYER_LIMIT', 5)

        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('pink');
        })

        .config(function (localStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('navagisDemo')
                .setStorageType('localStorage')
                .setNotify(false, false)
        })

        .config(['$stateProvider', '$urlRouterProvider', configRoutes])
    ;

    function configRoutes($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "templates/pages/home.html",
                controller: 'indexController',
                controllerAs: 'indexCtl'
            })
            .state('login', {
                url: '/login',
                templateUrl: "templates/pages/login.html",
                controller: 'loginController',
                controllerAs: 'loginCtl'
            })
        ;
    }

    //.run(function ($rootScope, userSession, $state) {
    //    var statesThatRequireAuth = ['home'];
    //    var statesThatDoesntRequireAuth = ['login'];
    //
    //    $rootScope.$on('$stateChangeStart', function (event, next, current) {
    //        /* Redirect to login page if user is not logged in */
    //        if (statesThatRequireAuth.indexOf(next.name) !== -1 && !userSession.isLoggedIn()) {
    //            event.preventDefault();
    //            $state.go('login');
    //        }
    //        /* Redirect to index if user is logged in */
    //        if (statesThatDoesntRequireAuth.indexOf(next.name) !== -1 && userSession.isLoggedIn()) {
    //            event.preventDefault();
    //            $state.go('home');
    //        }
    //    });
    //});

}());


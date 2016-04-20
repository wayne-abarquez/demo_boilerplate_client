(function () {
    'use strict';

    angular.module('demoApp')
        .controller('loginController', ['APP_NAME', 'userSession', '$state', '$timeout', loginController]);

    function loginController(APP_NAME, userSession, $state, $timeout) {
        var vm = this;

        vm.appName = APP_NAME;

        vm.user = {
            username: '',
            password: ''
        };

        vm.invalidLogin = false;

        vm.login = login;

        function login() {
            if (userSession.authenticate(vm.user.username, vm.user.password)) {
                userSession.loginUser(vm.user);
                $state.go('home');
            } else {
                vm.invalidLogin = true;
                $timeout(function () {
                    vm.invalidLogin = false;
                }, 3000);
            }
        }

    }
}());
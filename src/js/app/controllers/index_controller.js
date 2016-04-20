(function(){
'use strict';

angular.module('demoApp')
    .controller('indexController', ['APP_NAME', '$mdSidenav', indexController]);

    function indexController (APP_NAME, $mdSidenav) {
        var vm = this;

        vm.appName = APP_NAME;

        vm.lastSideNavOpenId = '';

        vm.toggleLayerPanel = buildToggler('layerPanel');
        vm.toggleSearchPanel = buildToggler('searchPanel');
        vm.closeSideNav = closeSideNav;

        function buildToggler(navID) {
            return function () {
                if (vm.lastSideNavOpenId && vm.lastSideNavOpenId !== navID) {
                    closeSideNav(vm.lastSideNavOpenId);
                }

                $mdSidenav(navID).toggle();

                vm.lastSideNavOpenId = navID;
            }
        }

        function closeSideNav(navID) {
            $mdSidenav(navID).close();
        }
    }
}());
(function () {
    'use strict';

    var users = [
        {
            username: 'admin',
            password: 'password123'
        },
        {
            username: 'user1',
            password: 'password123'
        }
    ];

    angular.module('demoApp')
        .constant('APP_USERS', users)
    ;

}());
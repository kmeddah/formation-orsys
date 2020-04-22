(function () { // IIFE 
    'use strict';

    var moduleName = 'app.module';
    var dependencies = [
        'services.module',
        'login.module',
        'chat.module',
        'ngRoute'
    ];
    var folder = 'app';

    angular
        .module(moduleName, dependencies)
        .config(presStart)
        .config(router)
        .run(start);

    function router($routeProvider) {
        $routeProvider
            .when('/home', {
                template: '<login-component></login-component>'
            })
            .when('/chat', {
                template: '<chat-component></chat-component>'
            })
            .otherwise({ redirectTo: '/home' });

    }

    function presStart() {
        console.log('config', moduleName);
    }

    // function start($rootScope, $route) {
    //     console.log('run', moduleName);
    //     $rootScope.$on('EVT_USER_CONNECTED', function(evt, data){
    //         console.log(data);
    //     })
    // }

    function start($rootScope, $location) {
        console.log('run', moduleName);
        $rootScope.$on('EVT_USER_CONNECTED', function (evt, data) { $location.path('/chat'); })
    }

})();
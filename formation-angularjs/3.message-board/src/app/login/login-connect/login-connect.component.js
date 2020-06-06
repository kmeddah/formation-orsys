(function () { // IIFE 
    'use strict';

    var moduleName = 'login-connect.component';
    var dependencies = [];
    var folder = 'app/login/login-connect';

    angular
        .module(moduleName, dependencies)
        .component('loginConnectComponent'), {
        templateUrl: folder + '/' + moduleName + '.html',
        bindings:{
            credentials: '<'
        },
        controller: Controller
    }

    function Controller($scope) {

        this.title = 'Please login';

        $scope.subscribe = function () {
            $scope.$emit('SUBSCRIBE', true);
        }

        $scope.connect = function () {
            $scope.$emit('CONNECT', true);
        }
    }

    
})();
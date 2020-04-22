(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'login.component';
    var dependencies = [
        'user.service'
    ];
    var folder = 'app/login/login';

    angular
        .module(moduleName, dependencies )
        .config(presStart)
        .run(start)
        .directive('loginComponent', Directive)
    
    function Directive() {
        return {
            restrict:'E',
            templateUrl: folder + '/' + moduleName + '.html',
            controller:Controller
        }
    }

    function Controller($scope, UserService) {
        console.warn(moduleName);
        $scope.connect = '';
        $scope.$on('Connect_Evt', function(event, data) {
            console.log(data);
            if (UserService.userExist(data)) {
            connect = 'Connecté';
            }
        })
    }

    function presStart() {
        console.log('config', moduleName);
    }

    function start() {
        console.log('run', moduleName);
    }

})();
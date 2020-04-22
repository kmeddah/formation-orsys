(function () { // IIFE 
    'use strict';

    var moduleName = 'login-connect.component';
    var dependencies = [];
    var folder = 'app/login/login-connect';

    angular
        .module(moduleName, dependencies)
        .config(presStart)
        .run(start)
        .directive('loginConnectComponent', Directive);

    function Directive() {
        return {
            restrict: 'E',
            templateUrl: folder + '/' + moduleName + '.html',
            controller: Controller
        }
    }

    // Declaration de fonctions
    function Controller($scope) {
        console.warn(moduleName);

        // Affectation de fonctions
        $scope.connect = function (){
            $scope.$emit('Connect_Evt', username);
        }
    }

    function presStart() {
        console.log('config', moduleName);
    }

    function start() {
        console.log('run', moduleName);
    }

})();
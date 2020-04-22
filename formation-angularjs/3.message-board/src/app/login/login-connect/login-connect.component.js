(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'login-connect.component';
    var dependencies = [];
    var folder = 'app/login/login-connect';

    angular
        .module(moduleName, dependencies )
        .config(presStart)
        .run(start)
        .directive('loginConnectComponent',  Directive)

        function Directive(){
            return {
                restrict:'E',
                templateUrl: folder + '/' + moduleName + '.html',
                scope:{
                    credentials:'='
                },
                controller:Controller
            }
        }
    
        function Controller($scope){
            console.warn(moduleName)

            $scope.subscribe = function(){
                $scope.$emit('SUBSCRIBE', true);
            }

            $scope.connect = function(){
                $scope.$emit('CONNECT', true);
            }
        }

    function presStart() {
        console.log('config', moduleName);
    }

    function start() {
        console.log('run', moduleName);
    }

})();
(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'login-create.component';
    var dependencies = [];
    var folder = 'app/login/login-create';

    angular
        .module(moduleName, dependencies )
        .config(presStart)
        .run(start)
        .directive('loginCreateComponent',  Directive)

        function Directive(){
            return {
                restrict:'E',
                scope:{
                    credentials:'='
                },
                templateUrl: folder + '/' + moduleName + '.html',
                controller:Controller
            }
        }
    
        function Controller($scope){
            console.warn(moduleName)

            $scope.create = function(){
                $scope.$emit('CREATE', true);
            }
        }

    function presStart() {
        console.log('config', moduleName);
    }

    function start() {
        console.log('run', moduleName);
    }

})();
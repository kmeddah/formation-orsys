(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'login.component';
    var dependencies = [];
    var folder = 'app/login/login';

    angular
        .module(moduleName, dependencies )
        .config(presStart)
        .run(start)
        .directive('loginComponent',  Directive)

    function Directive(){
        return {
            restrict:'E',
            templateUrl: folder + '/' + moduleName + '.html',
            scope:{},
            controller:Controller
        }
    }

    Controller.$inject = ['$scope'];
    function Controller($scope){
        console.warn(moduleName);

        $scope.subscribing = false;

        $scope.credentials = {
            username:'',
            email:'',
            fullname:''
        };

        $scope.$on('SUBSCRIBE', function(evt,data){
            $scope.subscribing = true;
        })
        
        $scope.$on('CONNECT', function(evt,data){
            console.groupCollapsed(evt.name);
            console.table($scope.credentials);
            console.groupEnd();
        })

        $scope.$on('CREATE', function(evt,data){
            console.groupCollapsed(evt.name);
            console.table($scope.credentials);
            console.groupEnd();
        })
    }

    function presStart() {
        console.log('config', moduleName);
    }

    function start() {
        console.log('run', moduleName);
    }

})();
(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'chat-userlist.component';
    var dependencies = [];
    var folder = 'app/chat/chat-userlist';

    angular
        .module(moduleName, dependencies )
        .config(presStart)
        .run(start)
        .directive('chatUserListComponent', Directive)
    
    function Directive() {
        return {
            restrict:'E',
            templateUrl: folder + '/' + moduleName + '.html',
            controller:Controller
        }
    }


    function presStart() {
        console.log('config', moduleName);
    }

    function start() {
        console.log('run', moduleName);
    }

})();
(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'chat-userlist-item.component';
    var dependencies = [];
    var folder = 'app/chat/chat-userlist-item';

    angular
        .module(moduleName, dependencies )
        .config(presStart)
        .run(start)
        .directive('chatUserListItemComponent', Directive)
    
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
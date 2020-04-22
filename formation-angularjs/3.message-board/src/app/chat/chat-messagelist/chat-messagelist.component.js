(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'chat-messagelist.component';
    var dependencies = [];
    var folder = 'app/chat/chat-messagelist';

    angular
        .module(moduleName, dependencies )
        .config(presStart)
        .run(start)
        .directive('chatMessagelitComponent',  Directive)

        function Directive(){
            return {
                restrict:'E',
                templateUrl: folder + '/' + moduleName + '.html',
                controller:Controller
            }
        }
    
        function Controller(){
            console.warn(moduleName)
        }

    function presStart() {
        console.log('config', moduleName);
    }

    function start() {
        console.log('run', moduleName);
    }

})();
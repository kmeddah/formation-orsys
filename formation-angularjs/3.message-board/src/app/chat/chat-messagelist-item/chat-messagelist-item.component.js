(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'chat-messagelist-item.component';
    var dependencies = [];
    var folder = 'app/chat/chat-messagelist-item';

    angular
        .module(moduleName, dependencies )
        .config(presStart)
        .run(start)
        .directive('chatMesssagelitItemComponent',  Directive)

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
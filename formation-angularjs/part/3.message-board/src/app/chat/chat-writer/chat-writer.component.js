(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'chat-writer.component';
    var dependencies = [];
    var folder = 'app/chat/chat-writer';

    angular
        .module(moduleName, dependencies )
        .config(presStart)
        .run(start)
        .directive('chatWriterComponent', Directive)
    
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
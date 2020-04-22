(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'chat.component';
    var dependencies = [];
    var folder = 'app/chat/chat';

    angular
        .module(moduleName, dependencies )
        .config(presStart)
        .run(start);

    function presStart() {
        console.log('config', moduleName);
    }

    function start() {
        console.log('run', moduleName);
    }

})();
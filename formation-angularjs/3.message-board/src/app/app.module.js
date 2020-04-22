(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'app.module';
    var dependencies = [
        'services.module',
        'login.module',
        'chat.module'
    ];
    var folder = 'app';

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
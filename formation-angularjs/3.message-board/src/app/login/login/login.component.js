(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'login.component';
    var dependencies = [];
    var folder = 'app/login/login';

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
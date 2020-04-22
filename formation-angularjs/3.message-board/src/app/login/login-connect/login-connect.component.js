(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'login-connect.component';
    var dependencies = [];
    var folder = 'app/login/login-connect';

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
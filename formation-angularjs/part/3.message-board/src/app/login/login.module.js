(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'login.module';
    var dependencies = [
        'login.component',
        'login-connect.component',
        'login-create.component'
    ];
    var folder = 'app/login';

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
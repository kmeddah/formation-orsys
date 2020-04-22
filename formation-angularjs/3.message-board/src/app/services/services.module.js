(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'services.module';
    var dependencies = [
        'dispatcher.service',
        'user.service',
        'message.service'
    ];
    var folder = 'app/services';

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
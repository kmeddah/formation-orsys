(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'dispatcher.service';
    var dependencies = [];
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
(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'user.service';
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

    function userService() {
        users = [
            'renaudd'
        ]
    }

    function userExist (username) {
        return (users.includes(username));
    }
})();
(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'message.service';
    var dependencies = [];
    var folder = 'app/services';

    angular
        .module(moduleName, dependencies )
        .service('MessageService', Service);
    
        function Service () {
            this.send = function () {
                console.log(data);
            }

            this.fetch = function () {
                console.log(data);
            }
        }
})();
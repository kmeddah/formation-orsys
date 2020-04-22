(function () { // IIFE 
    'use strict';

    var moduleName = 'user.service';
    var dependencies = [];
    var folder = 'app/services';

    angular
        .module(moduleName, dependencies)
        .service('UserService', Service);

    Service.$inject = ['$http']
    function Service($http) {

        var API = 'http://localhost:5050/users';

        this.connect = function (data){
            console.log(data);
        }

        this.create = function(data) {
            console.log(data);
            return $http.post(API, data);
        }
    }

})();
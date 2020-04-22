(function () { // IIFE 
    'use strict';

    var moduleName = 'dispatcher.service';
    var dependencies = [];
    var folder = 'app/services';

    angular
        .module(moduleName, dependencies)
        .service('DispatcherService', Service);

    Service.$inject = ['MessageService', 'UserService', '$rootScope'];
    function Service(MessageService, UserService, $rootScope) {

        // action = {type:'TYPE', payload:ANY}

        /** ActionType
         * USER_CONNECT
         * USER_CREATE
         * MESSAGE_SEND
         * MESSAGE_GET_LIST
         */

        /** EventType
         * INVALID_ACTION
         * INVALID_USER
         * OFFLINE
         */

        this.dispatch = function (action) {
            console.table(action);

            switch (action.type) {
                case 'USER_CONNECT':
                    return UserService.connect(action.payload);
                case 'USER_CREATE':
                    return UserService.create(action.payload).then(function(data) {
                        $rootScope.$broadcast('EVT_USER_CONNECTED', data);
                        return data;
                    })
                case 'MESSAGE_SEND':
                    MessageService.send(action.payload);
                    return;
                case 'MESSAGE_GET_LIST':
                    MessageService.fetch(action.payload);
                    return;
                default:
                    break;
            }
        }
    }

})();
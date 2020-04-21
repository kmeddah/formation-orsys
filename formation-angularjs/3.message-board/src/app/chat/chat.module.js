(function(){ // IIFE 
    'use strict'; 

    var moduleName = 'chat.module';
    var dependencies = [
        'chat.component',
        'chat-messagelist.component',
        'chat-messagelist-item.component',
        'chat-userlist.component',
        'chat-userlist-item.component',
        'chat-writer.component',
    ];
    var folder = 'app/chat';

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
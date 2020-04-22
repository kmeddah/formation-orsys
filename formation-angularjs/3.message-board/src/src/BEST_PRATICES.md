

* Un seul concept par fichier. (sauf component)
* Chaque fichier commence par la création d'un module du meme nom que le fichier.
* Le nom du fichier indique le concpt clés correspondant.
    * name.directive.js
    * NOT name.controller.js
    * name.component.js (directive avec template + controller) DANS son propre répertoire
    * name.filter.js
    * name.module.js DANS son propre répertoire
* PREFIX appModuleName


# A créer :

app.module
    login.module
        login.component
        login-connect.component
        login-create.component
    chat.module
        chat.component
        chat-userlist.component
        chat-userlist-item.component
        chat-messagelist.component
        chat-messagelist-item.component
        chat-writer.component
    services.module
        dispatcher.service
        message.service
        user.service

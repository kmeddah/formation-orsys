angular.module('app.module', [
    'search.module',
    'list.module'
])
.service('ImageService', ImageService);

function ImageService($http){
    var API = 'https://images-api.nasa.gov/search?q=';
    var service = this;

    this.images = [];

    this.search = function(keyword) {
        return $http.get(API + keyword).then(function(res){
            service.images = res.data.collection.items;
            return service.images;
        });
    }
}
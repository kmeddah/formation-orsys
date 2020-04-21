angular.module('app.module', [
    'search.module',
    'list.module'
])
.service('ImageService', ImageService);

ImageService.$inject = ['$http'];

function ImageService($http){
    var API = 'https://images-api.nasa.gov/search?q=';
    var service = this;

    this.images = [];

    this.pastSearches = [];

    this.cacheData = JSON.parse(window.sessionStorage.getItem('CACHE')) ||  {};
    
    this.search = function(keyword) {

        if (this.cacheData[keyword]) {
            this.images.length = 0;
            this.images.push(...this.cacheData[keyword]);
            return this.images;
        }

        return $http.get(API + keyword).then(function(res){
            service.images.length = 0;
            service.images.push(...res.data.collection.items);
            service.save(keyword);
            console.log(service.images);
            return service.images;
        });
    }

    this.save = function(keyword) {
        this.pastSearches.push(keyword);

        this.cacheData[keyword] = this.images;
    }
}
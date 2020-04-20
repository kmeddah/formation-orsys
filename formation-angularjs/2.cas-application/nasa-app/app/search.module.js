angular.module('search.module', [])
    .directive('searchComponent', searchComponent)
    .controller('searchController', searchController);

function searchComponent() {
    return {
        restrict: 'E',
        templateUrl:'app/search.component.html',
        controller:'searchController'
    }
}

function searchController($scope, ImageService) {

}
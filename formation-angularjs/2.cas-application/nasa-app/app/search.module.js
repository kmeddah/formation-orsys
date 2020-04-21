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

/**
 * Mapper un champ de recherche
 * ng-model -> keyword
 */

searchController.$inject = ['$scope', 'ImageService']
function searchController($scope, ImageService) {
    
    $scope.keyword = '';
    $scope.pastKeywords = ImageService.pastSearches;

    $scope.doClick = function() {
        // console.log($scope.keyword);
        ImageService.search($scope.keyword);
        $scope.keyword = '';
    }

    $scope.doKey = function($event) {
        if ($event.keyCode == 13) {
            $scope.doClick();
        }
    }
}
angular.module('list.module', [])
    .directive('listComponent', listComponent)
    .controller('listController', listController);

function listComponent() {
    return {
        restrict: 'E',
        templateUrl:'app/list.component.html',
        controller:'listController'
    }
}

function listController($scope, ImageService) {

    $scope.images = ImageService.images;
    
}
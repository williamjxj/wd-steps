define(['controllers/controllers', 'services/userService'],
    function(controllers) {
        controllers.controller('ViewCtrl', ['$scope', 'UserService',
            function($scope, UserService) {
                $scope.name = UserService.getUser('View');
            }]);
    });
/**
 define(['angular'], function(angular) {
  return angular.module('myApp.controllers', ['myApp.services'])
    .controller('MyController', ['$scope', 'myService',
      function($scope, myService) {
        $scope.data = myService.getData();
      }
    ])
};
*/
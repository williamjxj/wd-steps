define(['controllers/controllers', 'services/userService'],
    function(controllers) {
        controllers.controller('HomeCtrl', ['$scope', 'UserService',
            function ($scope, UserService) {
                $scope.name = UserService.getUser("Home");
            }
        ]);
    });
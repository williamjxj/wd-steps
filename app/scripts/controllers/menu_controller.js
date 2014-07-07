define(['controllers/controllers'],
    function(controllers) {
        'use strict';
        controllers.controller('MenuCtrl', function($scope, $location) {
            $scope.menu1 = [
                {
                    'title': 'Fitting List',
                    'link': 'fittingList'
                },
                {
                    'title': 'Active Job Order',
                    'link': 'activeJobOrder'
                },
                {
                    'title': 'Saved Job Orders',
                    'link': 'savedJobOrders'
                },
                {
                    'title': 'Work Orders',
                    'link': 'workOrders'
                }];
            $scope.menu2 = [
                {
                    'title': 'My Webduct',
                    'link': 'myWebduct'
                },
                {
                    'title': 'Dashboard',
                    'link': 'dashboard'
                }];

            $scope.isActive = function(route) {
                return route === $location.path();
            };
        })
    })
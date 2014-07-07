require.config({
    baseUrl: 'scripts/',
    paths: {
        // Uncaught object, v1.2 not work, v1.0.1 works.
        //angular: '../bower_components/angular/angular.min',
        angular: 'vendors/angular.min',
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
            //If CDN location fails, load from locally.
            '../bower_components/jquery/dist/jquery.min'
        ],
        modernizr: [
            '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.2/modernizr.min',
            //If CDN location fails, load from locally.
            '../bower_components/modernizr/modernizr'
        ],
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        angularResource: '../bower_components/angular-resource/angular-resource.min',
        angularCookies: 'bower_components/angular-cookies/angular-cookies',
        angularSanitize: 'bower_components/angular-sanitize/angular-sanitize.js',
        angularRoute: '../bower_components/angular-route/angular-route.min',
        jQueryUI: 'bower_components/jquery-ui/ui/jquery-ui',
        sortable: 'bower_components/angular-ui-sortable/sortable',
        localStorage: 'bower_components/angular-local-storage/angular-local-storage',
        angularAnimate: 'bower_components/angular-animate/angular-animate',
        //socket: 'bower_components/angular-socket-io/socket',
        domReady: 'vendors/domReady'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        angularRoute: {        //no need to distinguish define
            deps: ['angular']
        },
        angularResource: {        //no need to distinguish define
            deps: ['angular']
        }
    },
    priority: [
        'angular'
    ],
    urlArgs: "t=" +  (new Date()).getTime()
});

require([
        'angular',
        'app',
        'domReady',
        'controllers/view_controller',
        'controllers/menu_controller',
        'controllers/fitting_list_controller',
        'controllers/home_controller',
        'controllers/active_job_order_controller',
        'controllers/saved_job_orders_controller',
        'controllers/work_orders_controller',
        'controllers/my_webduct_controller',
        'controllers/dashboard_controller',
        'services/userService'
    ],
    function(angular, app, domReady) {
        'use strict';

        //var html = angular.element(document.getElementsByTagName('html')[0]);
        //console.log(html);

        app.config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'views/view.html',
                        controller: 'RootCtrl'
                    })
                    .when('/home', {
                        templateUrl: 'views/home.html',
                        controller: 'HomeCtrl'
                    })
                    .when('/fittingList', {
                        templateUrl: 'views/fittingList.html',
                        controller: 'FittingListCtrl'
                    })
                    .when('/activeJobOrder', {
                        templateUrl: 'views/activeJobOrder.html',
                        controller: 'ActiveJobOrderCtrl'
                    })
                    .when('/savedJobOrders', {
                        templateUrl: 'views/savedJobOrders.html',
                        controller: 'SavedJobOrdersCtrl'
                    })
                    .when('/workOrders', {
                        templateUrl: 'views/workOrders.html',
                        controller: 'WorkOrdersCtrl'
                    })
                    .when('/myWebduct', {
                        templateUrl: 'views/myWebduct.html',
                        controller: 'MyWebductCtrl'
                    })
                    .when('/dashboard', {
                        templateUrl: 'views/dashboard.html',
                        controller: 'DashboardCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    })

            }]);

        domReady(function() {
            angular.bootstrap(document, ['webduct']);

            // The following is required if you want AngularJS Scenario tests to work
            $('html').addClass('ng-app: webduct');
        });
    }
);
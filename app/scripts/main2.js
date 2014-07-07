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
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router.min',
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
        'uiRouter':{
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
        'uiRouter',
        // Any individual controller, service, directive or filter file
        // that you add will need to be pulled in here.
        'controllers/navbar_controller',
        'controllers/menu_controller',
        'directives/menu_tabs_directive',
        'filters/category_filter',
        'services/category_service'
    ],
    function(angular, app, domReady) {
        'use strict';

        //var html = angular.element(document.getElementsByTagName('html')[0]) //console.log(html);

        app.config(
            function($stateProvider, $urlRouterProvider) {

                // For any unmatched url, redirect to /
                $urlRouterProvider.otherwise("/");

                // Now set up the states:
                $stateProvider
                    .state('/', {
                        url: '/',
                        templateUrl: 'partials/view.html',
                        controller: 'RootCtrl'
                    })
                    .state('/home', {
                        templateUrl: 'partials/home.html',
                        controller: 'HomeCtrl'
                    })
                    .state('fittingList', {
                        url : '/fittingList',
                        templateUrl: 'partials/fittingList.html',
                        controller: 'FittingListCtrl'
                    })
                    .state('activeJobOrder', {
                        url: '/activeJobOrder',
                        templateUrl: 'partials/activeJobOrder.html',
                        controller: 'ActiveJobOrderCtrl'
                    })
                    .state('savedJobOrders', {
                        url: '/savedJobOrders',
                        templateUrl: 'partials/savedJobOrders.html',
                        controller: 'SavedJobOrdersCtrl'
                    })
                    .state('workOrders', {
                        url: '/workOrders',
                        templateUrl: 'partials/workOrders.html',
                        controller: 'WorkOrdersCtrl'
                    })
                    .state('myWebduct', {
                        url: '/myWebduct',
                        templateUrl: 'partials/myWebduct.html',
                        controller: 'MyWebductCtrl'
                    })
                    .state('dashboard', {
                        url: '/dashboard',
                        templateUrl: 'partials/dashboard.html',
                        controller: 'DashboardCtrl'
                    });
            });

        domReady(function() {
            angular.bootstrap(document, ['webduct']);

            // The following is required if you want AngularJS Scenario tests to work
            $('html').addClass('ng-app: webduct');
        });
    }
);
require.config({
    baseUrl: 'scripts/',
    paths: {
        angular: [
            '//ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular.min',
            // Uncaught object, v1.2.19 not work, v1.0.1 works.
            //angular: '../bower_components/angular/angular.min',
            'vendors/angular.min'
        ],
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
        // use UI Bootstrap to replace bootstrap.js:
        //bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        angularResource: '../bower_components/angular-resource/angular-resource.min',
        angularCookies: '../bower_components/angular-cookies/angular-cookies',
        angularSanitize: '../bower_components/angular-sanitize/angular-sanitize',
        angularRoute: '../bower_components/angular-route/angular-route.min',
        angularBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router.min',
        localStorage: '../bower_components/angular-local-storage/angular-local-storage',
        angularAnimate: '../bower_components/angular-animate/angular-animate',
        domReady: './vendors/domReady'
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
        },
        angularBootstrap: {
            deps: ['angular']
        },
        angularAnimate: {
            deps: ['angular']
        }
    }
//  , priority: [
//        'angular'
//    ]
//  , urlArgs: "t=" +  (new Date()).getTime()
});

require([
        'angular',
        'app',
        'domReady',
        'uiRouter',
        'angularBootstrap',
        //'angularAnimate',
        // Any individual controller, service, directive or filter file
        // that you add will need to be pulled in here.
        'controllers/navbar_controller',
        'controllers/menu_controller',
        'controllers/fitting_list_controller',
        'controllers/active_job_order_controller',
        'controllers/saved_job_orders_controller',
        'controllers/my_webduct_controller',
        'controllers/work_orders_controller',
        'controllers/dashboard_controller',
        'controllers/home_controller',
        'controllers/view_controller',
        'directives/menu_tabs_directive',
        'filters/category_filter',
        'services/category_service'
    ],
    function(angular, app, domReady) {
        'use strict';

        app.config(
            function($stateProvider, $urlRouterProvider) {

                // For any unmatched url, redirect to /
                $urlRouterProvider.otherwise('/fittingList');

                // Now set up the states:
                $stateProvider
                    .state('view', {
                        url: '/view',
                        templateUrl: 'views/view.html',
                        controller: 'ViewCtrl'
                    })
                    .state('home', {
                        url: '/home',
                        templateUrl: 'views/home.html',
                        controller: 'HomeCtrl'
                    })
                    .state('fittingList', {
                        url : '/fittingList',
                        views: {
                            '': {
                                controller: 'FittingListCtrl',
                                templateUrl: 'views/fittingList.html'
                            },
                            'nav@fittingList': {
                                templateUrl: 'views/navbar.html',
                                controller: 'NavbarCtrl'
                                //template: 'Look I am a column!'
                            },
                            'main@fittingList': {
                                //templateUrl: 'views/fittingList.html'
                                //controller: 'FittingListCtrl'
                                template: 'Look I am a fittingList column 2!'
                            }
                        }
                    })
                    .state('activeJobOrder', {
                        url: '/activeJobOrder',
                        views: {
                            '': {
                                controller: 'ActiveJobOrderCtrl',
                                templateUrl: 'views/activeJobOrder.html'
                            },
                            'nav@activeJobOrder': {
                                templateUrl: 'views/navbar.html',
                                controller: 'NavbarCtrl'
                            },
                            'main@activeJobOrder': {
                                //templateUrl: 'views/activeJobOrder.html',
                                template: 'Look I am a activeJobOrder column 2!'
                            }
                        }
                    })
                    .state('savedJobOrders', {
                        url: '/savedJobOrders',
                        views: {
                            '': {
                                templateUrl: 'views/savedJobOrders.html',
                                controller: 'SavedJobOrdersCtrl'
                            },
                            'nav@savedJobOrders': {
                                templateUrl: 'views/navbar.html',
                                controller: 'NavbarCtrl'
                            },
                            'main@savedJobOrders': {
                                //templateUrl: 'views/savedJobOrders.html',
                                //controller: 'SavedJobOrdersCtrl'
                                template: 'Look I am a savedJobOrders column 2!'
                            }
                        }
                    })
                    .state('workOrders', {
                        url: '/workOrders',
                        views: {
                            '': {
                                controller: 'WorkOrdersCtrl',
                                templateUrl: 'views/workOrders.html'
                            },
                            'nav@workOrders': {
                                templateUrl: 'views/navbar.html',
                                controller: 'NavbarCtrl'

                            },
                            'main@workOrders': {
                                //templateUrl: 'views/workOrders.html',
                                //controller: 'WorkOrdersCtrl'
                                template: 'Look I am a workOrders column 2!'
                            }
                        }
                    })
                    .state('myWebduct', {
                        url: '/myWebduct',
                        views: {
                            '': {
                                templateUrl: 'views/myWebduct.html',
                                controller: 'MyWebductCtrl'
                            },
                            'nav@myWebduct': {
                                templateUrl: 'views/navbar.html',
                                controller: 'NavbarCtrl'

                            },
                            'main@myWebduct': {
                                template: 'Look I am a myWebduct column 2!'
                                //templateUrl: 'views/myWebduct.html',
                                //controller: 'MyWebductCtrl'
                            }
                        }
                    })
                    .state('dashboard', {
                        url: '/dashboard',
                        views: {
                            '': {
                                templateUrl: 'views/dashboard.html',
                                controller: 'DashboardCtrl'
                            },
                            'nav@dashboard': {
                                templateUrl: 'views/navbar.html',
                                controller: 'NavbarCtrl'

                            },
                            'main@dashboard': {
                                //templateUrl: 'views/dashboard.html',
                                template: 'Look I am a dashboard column 2!'
                            }
                        }

                    });
            });

        domReady(function() {
            //https://docs.angularjs.org/error/ng/btstrpd?p0=%3Chtml%20lang%3D%22en%22%20class%3D%22no-js%20ng-app:%20webduct%22%3E
            angular.bootstrap(document.body, ['webduct']);

            // The following is required if you want AngularJS Scenario tests to work
            $('html').addClass('ng-app: webduct');
        });
    }
);
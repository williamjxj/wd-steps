// The app/scripts/app.js file, which defines our AngularJS app
define([
    "angular",
    "services/services",
    "filters/filters",
    "directives/directives",
    "controllers/controllers"
], function(angular) {
    return angular.module('webduct', [
        "webduct.services",
        "webduct.filters",
        "webduct.directives",
        "webduct.controllers"
    ])
});


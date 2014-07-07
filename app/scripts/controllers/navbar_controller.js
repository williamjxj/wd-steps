define(['controllers/controllers', 'jquery', 'underscore'],
    function(controllers, $, _) {
        'use strict';
        controllers.controller('NavbarCtrl', function($scope, $location, $http) {

            $scope.open_submenu = false;

            $scope.getCategory = function(obj, noOpen) {
                var nav_value = 'name: [' + $(obj.target).text() + '], id: [' + obj.target.attributes.data.value + ']';
                //  console.log($('div.col-md-9').html(), $('div.col-md-9').find('.well').length);
                $('div.col-md-9').find('.well').length !==0 ?
                    $('div.col-md-9').find('.well').html(nav_value) :
                    $('<div></div>').addClass('well').html(nav_value).appendTo('div.col-md-9').fadeIn();
                if(noOpen) {
                    //disable the collapse for 1-item accordion.
                    //$(obj.target).closest('div.panel').find('div.panel-body').css('padding', '0px');
                    $(obj.target).closest('div.panel').find('div.panel-collapse').hide();
                    $('div.col-md-3').find('.glyphicon').filter('.glyphicon-chevron-down').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                    //ui.accordion.isDisabled = 1;
                    //$scope.isDisabled = 1;
                }
                return false;
            }

            // use 'underscore' to set navbar template data.
            function setTemplateData(data) {
                var ary = [];
                _.each(data, function(value, key) {
                    _.map(value, function(v,k) {
                        ary.push({
                            name: k,
                            total: v.length,
                            items: v
                        });
                    });
                });
                return ary;
            };
            // use angular function to set navbar template data.
            function setTemplateData_2(data) {
                angular.forEach(data, function(value, key) {
                    console.log(value, key);
                });
            };

            $scope.url = './data/category_mock.json';
            $http.get($scope.url)
                .success(function(data, status, headers, config) {
                    $scope.status = status;
                    $scope.categories = setTemplateData(data);
                }).
                error(function(data, status) {
                    $scope.categories = data || "Request failed";
                    $scope.status = status;
                });

        });
    });


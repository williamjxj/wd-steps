define(['services/services'],
    function(services) {
        services.factory('Category', ['$resource', function($resource) {
            return $resource('/api/category/:id', { id: '@id' }, { update: { method: 'PUT' } });
        }]);
    });
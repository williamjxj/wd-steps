define(['services/services'],
    function(services) {
        services.factory('UserService', [
            function() {
                return {
                    getUser: function(caller) {
                        return 'TESTING USER for [' + caller + ']';
                    }
                };
            }]);
    });
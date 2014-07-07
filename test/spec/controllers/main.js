'use strict';

describe('Controller: MenuCtrl', function () {

    // load the controller's module
    beforeEach(module('webduct'));

    var MenuCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MenuCtrl = $controller('MenuCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of menu1 to the scope', function () {
        expect(scope.menu1.length).toBe(4);
    });
    it('should attach a list of menu2 to the scope', function () {
        expect(scope.menu2.length).toBe(2);
    });
});

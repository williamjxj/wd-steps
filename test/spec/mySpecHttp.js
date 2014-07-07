describe("httpBackend", function() {
    var $httpBackend, $rootScope;

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        // backend definition common for all tests
        $httpBackend.when('GET', 'data/category_mock.json').respond();
    }));

    afterEach(function() {

    });

    it('should fetch the categories array', function() {
        $httpBackend.expectGET('data/category_mock.json');
        $httpBackend.flush();
    })
})
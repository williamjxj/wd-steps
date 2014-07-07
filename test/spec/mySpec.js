describe("My suite", function() {
    it("should be true", function() {
        expect(true).toBe(true);
    })
})

describe("My controller", function() {
    it("to work correctly", function() {
        var a = 12;
        var b = a;
        expect(a).toBe(b);
        expect(a).not.toBe(null);
    })
})
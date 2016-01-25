describe('Location', function() {
  it("creates a new location with the given properties", function() {
    var testLocation = new Location("123 Anyplace Street", "Anywhere", "OR");
    expect(testLocation.street).to.equal("123 Anyplace Street");
    expect(testLocation.city).to.equal("Anywhere");
    expect(testLocation.state).to.equal("OR");
    expect(testLocation.addresses).to.eql([]);
  });

});

describe('toDoList', function() {
  it("creates a new list item", function() {
    var testToDoList = new toDoList("clean the house");
    expect(testToDoList).to.equal("clean the house");


  });
});

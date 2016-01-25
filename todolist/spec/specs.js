describe('toDoList', function() {
  it("creates a new list item with the given properties", function() {
    var testToDoList = new toDoList("clean the house", "high", "Wednesday");
    expect(testToDoList.task).to.equal("clean the house");
    expect(testToDoList.priority).to.equal("high");
    expect(testToDoList.deadline).to.equal("Wednesday");
    expect(testToDoList.entire_task).to.eql([]);


  });
});

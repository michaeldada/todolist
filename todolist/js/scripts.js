function toDoList(task, priority, deadline) {
  this.task = task;
  this.priority = priority;
  this.deadline = deadline;
  this.entire_task = [];
}

toDoList.prototype.entireTask = function() {
  return this.task + ", " + this.priority + ", " + this.deadline;
}

$(document).ready(function() {
  $('form#taskForm').submit(function(event) {
    event.preventDefault();

    var newTask = $("input#new-task").val();
    var newPriority = $("input#new-priority").val();
    var newDeadline = $("input#new-deadline").val();
    var newTask = new toDoList(newTask, newPriority, newDeadline);


    $("ul#tasklist").append("<li><span class='taskInsert'>" + newTask.entireTask() + "</span></li>");

    $(".taskInsert").last().click(function() {
    $(this).wrap("<strike>");
    });


  });
});

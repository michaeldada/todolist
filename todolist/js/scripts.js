function toDoList(task, priority, deadline) {
  this.task = task;
  this.priority = priority;
  this.deadline = deadline;
  this.entire_task = [];
}

toDoList.prototype.entire_task = function(){
  return this.task + ", " + this.priority + ", " + this.deadline;
}

/*
filename: complexCode.js
content: This code is a complex implementation of a task manager application.
It includes multiple classes, inheritance, and advanced features.
*/

// Task class represents a single task with a name and status
class Task {
  constructor(name) {
    this.name = name;
    this.status = "To Do";
  }

  setStatus(status) {
    this.status = status;
  }

  getStatus() {
    return this.status;
  }
}

// SubTask class extends Task and adds a due date field
class SubTask extends Task {
  constructor(name, dueDate) {
    super(name);
    this.dueDate = dueDate;
  }

  getDueDate() {
    return this.dueDate;
  }
}

// TaskManager class manages tasks and subtasks
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  getAllTasks() {
    return this.tasks;
  }

  getTasksByStatus(status) {
    return this.tasks.filter(task => task.getStatus() === status);
  }
}

// Create a task manager instance
const taskManager = new TaskManager();

// Create some tasks and subtasks
const task1 = new Task("Complete project");
const task2 = new Task("Prepare presentation");
const subtask1 = new SubTask("Research", "2022-05-01");

// Set task statuses
task1.setStatus("In Progress");
task2.setStatus("Completed");

// Add tasks and subtasks to the task manager
taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(subtask1);

// Print all tasks
console.log("All tasks:");
taskManager.getAllTasks().forEach(task => {
  console.log(`Task: ${task.name}\tStatus: ${task.getStatus()}`);
});

// Print tasks by status
console.log("\nTasks by status:");
const statuses = ["To Do", "In Progress", "Completed"];
statuses.forEach(status => {
  console.log(`Status: ${status}`);
  taskManager.getTasksByStatus(status).forEach(task => {
    console.log(`\tTask: ${task.name}`);
  });
});
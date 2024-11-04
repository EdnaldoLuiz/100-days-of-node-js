const Task = require('./task');

class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(description) {
        const task = new Task(this.nextId++, description);
        this.tasks.push(task);
        return task;
    }

    listTasks() {
        return this.tasks;
    }

    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            return this.tasks.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = TaskManager;
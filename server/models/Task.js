let tasks = [];
let nextId = 1;

class Task {
  constructor(data) {
    this._id = String(nextId++);
    this.title = data.title;
    this.description = data.description;
    this.createdAt = new Date();
  }

  static async find() {
    return [...tasks].sort((a, b) => b.createdAt - a.createdAt);
  }

  static async findByIdAndDelete(id) {
    const index = tasks.findIndex((t) => t._id === id);
    if (index === -1) return null;
    const deleted = tasks[index];
    tasks.splice(index, 1);
    return deleted;
  }

  static async create(data) {
    const task = new Task(data);
    tasks.push(task);
    return task;
  }

  static reset() {
    tasks = [];
    nextId = 1;
  }
}

module.exports = Task;

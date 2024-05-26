import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task.model';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() completed = new EventEmitter<boolean>();
  @Output() taskOutput = new EventEmitter<Task>();
  formTask: Task = {
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: '',
  };

  cancel() {
    this.completed.emit(false);
  }
  create() {
    this.formTask.userId = this.userId;
    this.taskOutput.emit(this.formTask);
    this.completed.emit(false);
  }
}

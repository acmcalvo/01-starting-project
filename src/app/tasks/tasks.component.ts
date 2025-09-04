import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component'; // Correct import

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [TaskComponent],
})
export class TasksComponent { // Correct class name
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn the basics of Angular framework and build a simple app.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn the basics of Angular framework and build a simple app.',
      dueDate: '2025-12-31'
    }
  ];
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }
  onCompleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
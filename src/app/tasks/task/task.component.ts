import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type Task } from './task.models';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output () complete = new EventEmitter<string>();

  onCompleteTask(): void {
    this.complete.emit(this.task.id);
  }
}
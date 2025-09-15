import { Component, Input, Output,  inject} from '@angular/core';

import { type Task } from './task.models';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../task.service';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  private tasksService = inject(TaskService);

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task.id);
  }
}
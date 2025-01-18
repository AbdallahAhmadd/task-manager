import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../task.service';
import { Task } from '../../../../server/src/utils';
import { WritableSignal } from '@angular/core';


@Component({
  selector: 'app-app-task-list',
  templateUrl: './app-task-list.component.html',
  styleUrl: './app-task-list.component.css',
  standalone: true,
  imports: [NgIf, NgFor, MatButtonModule, MatCardModule]
})
export class AppTaskListComponent implements OnInit {
  tasks$ = {} as WritableSignal<Task[]>;

constructor(private taskService: TaskService) { }

ngOnInit(): void {
    this.fetchTasks();
}

private fetchTasks(){
  this.tasks$ = this.taskService.tasks$;
  this.taskService.getAllTasks();
}

}



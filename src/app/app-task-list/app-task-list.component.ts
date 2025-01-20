import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../task.service';
import { Task } from '../../../../server/src/utils';
import { signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-app-task-list',
  templateUrl: './app-task-list.component.html',
  styleUrl: './app-task-list.component.css',
  standalone: true,
  imports: [CommonModule,NgIf, NgFor, MatButtonModule, MatCardModule, MatIconModule]
})
export class AppTaskListComponent implements OnInit {
  tasks$;
  isLoading = signal<boolean>(true);

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.tasks$;
  }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.refreshTasks();
  }

  deleteTask(id: string): void {
    console.log(`Deleting task with ID: ${id}`);
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        console.log('Task deleted successfully');
        this.fetchTasks(); // Refresh tasks after deletion
      },
      error: (err) => {
        console.error('Error deleting task:', err);
      },
    });
  }

  createTask(task:Task):void{
    this.taskService.createTask(task).subscribe({
      next:()=>{
        console.log('Task created successfully');
        this.fetchTasks();
      }
    })
  }

}




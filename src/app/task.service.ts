import { Injectable, PendingTasks, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../../server/src/utils';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:3000';
  tasks$ = signal<Task[]>([]);

  constructor(private httpClient: HttpClient) { }

  getAllTasks() {
    this.httpClient.get<Task[]>(`${this.url}/tasks`).subscribe((tasks) => {
      this.tasks$.set(tasks);
    });
  }

  createTask(task: Task) {
    this.httpClient.post<Task[]>(`${this.url}/tasks`, task, { responseType: 'json' })
  }

}

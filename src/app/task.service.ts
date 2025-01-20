import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../../../server/src/utils';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  private tasksSubject = new BehaviorSubject<Task[]>([]);

  tasks$ = this.tasksSubject.asObservable();



  getAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.url}/tasks`);
  }


  refreshTasks(): void {
    this.getAllTasks().subscribe({
      next: (tasks) => this.tasksSubject.next(tasks),
      error: (err) => console.error('Error fetching tasks:', err),
    });
  }


  createTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.url}/tasks`, task);
  }

  deleteTask(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/tasks/${id}`);
  }
}